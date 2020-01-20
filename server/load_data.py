import csv
from app import app, db, bcrypt
from app.models import User, Language, Service, Rating, Day
from app.routes import to_date


def db_create_days():
    with open('mockdata/days.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            for val in row:
                day = Day(day=val)
                db.session.add(day)
                db.session.commit()



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
            user_days = []
            for col in row:
                if column == 9:
                    col = bool(col)
                print("COLUMN+++++++++++++++++++++++++++++++++")
                print(column)
                print(col)
                if column == 10:
                    col = [int(s) for s in str(col).split()]
                    for lang_id in col:
                        language = Language.query.filter_by(id=lang_id).first()
                        user_languages.append(language)
                
                if column == 11:
                    col = [int(s) for s in str(col).split()]
                    for serv_id in col:
                        service = Service.query.filter_by(id=serv_id).first() 
                        user_services.append(service)
                print("COLUMN@+++++++++++++++++++++++++++++++++")
                print(column)
                print(col)
                if column == 12:
                    col = [int(s) for s in str(col).split()]
                    for rating_id in col:
                        rating = Rating.query.filter_by(id=rating_id).first() 
                        user_ratings.append(rating)
                    print("RATINGS+++++++++++++++++++++++++++++++++")
                    print(user_ratings)
                    print("RATINGS+++++++++++++++++++++++++++++++++")

                if column == 13:
                    col = [int(s) for s in str(col).split()]
                    for day_id in col:
                        day = Day.query.filter_by(id=day_id).first() 
                        user_days.append(day)

                if column == 14:
                    
                    col = to_date(col)
                    

                key = keys[column]
                user_data[key] = col
                column = column + 1
            print("+++++++++++++++++++++++++++++++++")
            print(row)
            print(user_data)
            print("+++++++++++++++++++++++++++++++++")
            
            user_data["languages"] = user_languages
            user_data["services"] = user_services
            user_data["ratings"] = user_ratings
            user_data["days_can_volunteer"] = user_days 
            password = user_data["password_hash"]
            user_data["password_hash"] = bcrypt.generate_password_hash(password)

            

            user = User(*user_data.values())
            db.session.add(user)
            db.session.commit()


def main():
    db_create_days()
    db_create_language()
    db_create_service()
    db_create_rating()
    db_create_user()


main()