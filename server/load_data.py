import csv
from app import app, db, bcrypt
from app.models import User, Language, Service, Rating

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

def db_create_rating():
    with open('mockdata/rating.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            for val in row:
                rating = Rating(rating=int(val))
                db.session.add(rating)
                db.session.commit()                

def db_create_user():
    keys = ["username", "password_hash", "email", "first_name", "last_name", "city", "state", "zip_code", "description", "is_volunteer", "languages", "services", "ratings", "days_can_volunteer", "time_can_volunteer"]
    with open('mockdata/users.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        
        for row in csv_reader:
            column = 0

            user_data = {}
            user_languages = []
            user_services = []
            user_ratings = []
            for col in row:
                if column == 9:
                    col = bool(col)
                if column == 10 or column == 11 or col == 12:

                    col = [int(s) for s in str(col).split()]
                    
                    if column == 10:
                        for lang_id in col:
                            language = Language.query.filter_by(id=lang_id).first()
                            user_languages.append(language)
                    
                    if column == 11:
                        for serv_id in col:
                            service = Service.query.filter_by(id=serv_id).first() 
                            user_services.append(service)
                    if column == 12:
                        for rating_id in col:
                            rating = Rating.query.filter_by(id=rating_id).first() 
                            user_ratings.append(rating)

                
                if column == 14:
                    
                    col = int(col)
                    print("+++++++++++++++++++++++++++++++++")

                key = keys[column]
                user_data[key] = col
                column = column + 1
            
            user_data["languages"] = user_languages
            user_data["services"] = user_services
            user_data["ratings"] = user_ratings
            password = user_data["password_hash"]
            user_data["password_hash"] = bcrypt.generate_password_hash(password)

            print("+++++++++++++++++++++++++++++++++")
            print(row)
            print(user_data)
            print("+++++++++++++++++++++++++++++++++")

            user = User(*user_data.values())
            db.session.add(user)
            db.session.commit()


def main():
    db_create_language()
    db_create_service()
    db_create_rating()
    db_create_user()


main()