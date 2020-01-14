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
    languages = db.relationship('Language', secondary=languages, lazy='subquery', backref=db.backref('user', lazy=True, uselist=False))
    services = db.relationship('Service', secondary=services, lazy= 'subquery', backref=db.backref('user', lazy=True, uselist=False))
    description = db.Column(db.String(500))
    password_hash = db.Column(db.String(200))
    is_voluteer = db.Column(db.Boolean, default=False)
    days_can_volunteer = db.Column(db.String(10))
    time_can_volunteer = db.Column(db.Integer)    
    
    def __repr__(self):
        return '<User {>'.format(self.username)
    
    def __init__(self, username, password_hash, email, first_name, last_name, city , state, zip_code, languages, description, is_voluteer, services, days_can_volunteer, time_can_volunteer ):
        self.username = username
        self.password_hash = password_hash 
        self.email = email 
        self.first_name = first_name 
        self.last_name = last_name 
        self.city = city  
        self.state = state 
        self.zip_code = zip_code 
        self.languages = languages 
        self.description = description
        self.is_voluteer = is_voluteer
        self.services = services
        self.days_can_volunteer = days_can_volunteer
        self.time_can_volunteer = time_can_volunteer

    def to_json(self):
        return dict(id=self.id, username=self.username, password_hash=self.password_hash, email=self.email, first_name=self.first_name, last_name=self.last_name, city=self.city, state=self.state, zip_code=self.zip_code, languages=[language.to_json() for language in self.languages], description=self.description, is_voluteer=self.is_voluteer, services=[service.to_json() for service in self.services], days_can_volunteer=self.days_can_volunteer, time_can_volunteer=self.time_can_volunteer
        )