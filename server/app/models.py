from datetime import datetime
from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), index=True, unique=True)
    email = db.Column(db.String(120), index=True, unique=True)
    hours = db.Column(db.Integer)
    password_hash = db.Column(db.String(128))
    days_can_volunteer = db.Column(db.String(10), index=True)
    time_can_volunteer = db.Column(db.Integer)
    languages = db.Column(db.String(100))
    
    def __repr__(self):
        return '<User {}>'.format(self.username)
        
    @property
    def serialize(self):
        return {
            'username': self.username,
            'email': self.email,
            'id': self.id,
            'hours':self.hours,
            'days_can_volunteer': self.days_can_volunteer,
            'time_can_volunteer': self.time_can_volunteer,
            'languages': self.languages,
        }