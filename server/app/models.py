from datetime import datetime
from app import db

from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base


languages = db.Table('user_languages',
db.Column('language_id', db.Integer, db.ForeignKey('language.id'), primary_key=True),
db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True)
)


services = db.Table('user_services',
db.Column('service_id', db.Integer, db.ForeignKey('service.id'), primary_key=True),
db.Column('user_id', db.Integer, db.ForeignKey('user.id'), primary_key=True)
)

ratings = db.Table('user_ratings',
db.Column('rating_id', db.Integer, db.ForeignKey('rating.id')),
db.Column('user_id', db.Integer, db.ForeignKey('user.id'))
)

days = db.Table('user_days',
db.Column('day_id', db.Integer, db.ForeignKey('day.id')),
db.Column('user_id', db.Integer, db.ForeignKey('user.id'))
)

class Day(db.Model):
    _tablename__ = "day"

    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(128))

    def to_json(self):
        return dict(id=self.id, day=self.day)


class Language(db.Model):
    _tablename__ = "language"

    id = db.Column(db.Integer, primary_key=True)
    language = db.Column(db.String(128))

    def to_json(self):
        return dict(id=self.id, language=self.language)

class Service(db.Model):
    _tablename__ = "service"

    id = db.Column(db.Integer, primary_key=True)
    service = db.Column(db.String(128))

    def to_json(self):
        return dict(id=self.id, service=self.service)

class Rating(db.Model):
    _tablename__ = "rating"

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)

    def to_json(self):
        return dict(id=self.id, rating=self.rating)
class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(128), index=True, unique=True)
    email = db.Column(db.String(128), index=True, unique=True)
    first_name = db.Column(db.String(128))
    last_name = db.Column(db.String(128))
    city = db.Column(db.String(128))
    state = db.Column(db.String(128))
    zip_code = db.Column(db.String(128))
    languages = db.relationship('Language', secondary=languages, lazy='subquery', backref=db.backref('user', lazy=True))
    services = db.relationship('Service', secondary=services, lazy= 'subquery', backref=db.backref('user', lazy=True))
    description = db.Column(db.String(500))
    password_hash = db.Column(db.String(200))
    is_volunteer = db.Column(db.Boolean, default=False)
    ratings = db.relationship('Rating', secondary=ratings, lazy= 'subquery', backref=db.backref('user', lazy=True))  
    days_can_volunteer = db.relationship('Day', secondary=days, lazy='subquery', backref=db.backref('user', lazy=True))
    time_can_volunteer = db.Column(db.DateTime, default=datetime.utcnow)
    date_created = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    date_updated = db.Column(db.DateTime, onupdate=datetime.utcnow)
    
    def __repr__(self):
        return '<User {>'.format(self.username)
    
    def __init__(self, username, password_hash, email, first_name, last_name, city , state, zip_code, description, is_volunteer, languages, services, ratings=[], days_can_volunteer="", time_can_volunteer=0):
        self.username = username
        self.password_hash = password_hash 
        self.email = email 
        self.first_name = first_name 
        self.last_name = last_name 
        self.city = city  
        self.state = state 
        self.zip_code = zip_code 
        self.description = description
        self.is_volunteer = is_volunteer
        self.languages = languages 
        self.services = services
        self.ratings=ratings
        self.days_can_volunteer = days_can_volunteer
        self.time_can_volunteer = time_can_volunteer
        

    def to_json(self):
        return  { "id": self.id,
            "username": self.username,
            "email": self.email,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "city": self.city,
            "state": self.state,
            "zipCode": self.zip_code,
            "languages": [language.to_json() for language in self.languages],
            "description": self.description,
            "ratings": [rating.to_json() for rating in self.ratings],
            "isVolunteer": self.is_volunteer,
            "services": [service.to_json() for service in self.services],
            "daysCanVolunteer": [day.to_json() for day in self.days_can_volunteer],
            "timeCanVolunteer": self.time_can_volunteer,
            "date_created": self.date_created,
            "date_update": self.date_updated
            }
        