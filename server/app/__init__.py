from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
app.config.from_object(Config)

bcrypt = Bcrypt(app)

CORS(app)


db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app import routes, models