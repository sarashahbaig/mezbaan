import csv
from app import app, db
from app.models import User, Language, Service

def db_create_language():
    with open('mockdata/languages.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            for val in row:
                language = Language(language=val)
                db.session.add(language)
                db.session.commit()

def db_create_service():
    with open('mockdata/services.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            for val in row:
                service = Service(service=val)
                db.session.add(service)
                db.session.commit()

def db_create_user():
    keys = ["username", "password_hash", "email", "first_name", "last_name", "city", "state", "zip_code", "languages", "description", "is_volunteer", "services", "days_can_volunteer", "time_can_volunteer"]
    with open('mockdata/users.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        
        for row in csv_reader:
            column = 0

            user_data = {}
            user_languages = []
            user_services = []
            for col in row:
                if column == 8 or column == 11:

                    col = [int(s) for s in str(col).split()]
                    
                    if column == 8:
                        for lang_id in col:
                            language = Language.query.filter_by(id=lang_id).first()
                            user_languages.append(language)
                    
                    if column == 11:
                        for serv_id in col:
                            service = Service.query.filter_by(id=serv_id).first() 
                            user_services.append(service)

                if column == 10:
                    col = bool(col)
                if column == 14:
                    col = int(col)

                key = keys[column]
                user_data[key] = col
                column = column + 1
            
            user_data["languages"] = user_languages
            user_data["services"] = user_services    

            user = User(*user_data.values())
            db.session.add(user)
            db.session.commit()


def main():
    db_create_language()
    db_create_service()
    db_create_user()


main()