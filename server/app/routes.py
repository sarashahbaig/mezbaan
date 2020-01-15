from flask import Flask, request, jsonify, make_response, abort
from app import app, db, bcrypt
from app.models import User, Language, Service


@app.route("/", methods=["GET"])
def index():
  return make_response("home", 200)


@app.route("/api/register", methods=["POST"])
def register():

  is_volunteer = request.json.get('isVolunteer')
  username = request.json.get('username')
  email = request.json.get('email')
  password = request.json.get('password')
  first_name = request.json.get('firstName')
  last_name = request.json.get('lastName')
  city = request.json.get('city')
  state = request.json.get('state')
  zip_code = request.json.get('zipCode')
  languages = request.json.get('languages')
  services = request.json.get('services')
  print(services)
  days_can_volunteer = request.json.get('days')
  time_can_volunteer = request.json.get('time_can_volunteer')
  description = request.json.get('description')

 

  # return jsonify(respn)

  if username is None or email is None or password is None:
      return make_response("One of the fields is missing", 400)

  pwd_hash = bcrypt.generate_password_hash(password)

  user_languages = []
  for lang_id in languages:
    language = Language.query.filter_by(id=lang_id).first()
    user_languages.append(language)
  

  user_services = []
  for serv_id in services:
    service = Service.query.filter_by(id=serv_id).first()
    user_services.append(service)
  
  print(user_languages)
  print(user_services)

  user_data = {
    "username": username,
    "password_hash": pwd_hash,
    "email": email,
    "first_name": first_name,
    "last_name": last_name,
    "city": city,
    "state": state,
    "zip_code": zip_code,
    "languages": user_languages,
    "description": description,
    "is_volunteer": is_volunteer,
    "services": user_services,
    "days_can_volunteer": days_can_volunteer,
    "time_can_volunteer": time_can_volunteer,
  }

  user = User(*user_data.values())
  db.session.add(user)
  db.session.commit()

  return make_response("User successfully added", 200)

@app.route("/api/login", methods=["POST"])
def login():

  username = request.json.get('username')
  password = request.json.get('password')

  if username is None or password is None:
        return make_response('username or password not provided', 400)

  user = User.query.filter_by(username=username).first()

  if user is None:
    return abort(make_response("No user found", 404))

  user_pwd = user.password_hash

  if not bcrypt.check_password_hash(user_pwd, password):
    return make_response("Username or passowrd incorrect", 401)

  return jsonify(user.to_json())

@app.route("/api/logout", methods=["GET"])
def logout():
  return make_response("You are now logged out", 200)

@app.route("/api/users", methods=["GET"])
def get_all_users():
  db_users = User.query.all()
  users = [user.to_json() for user in User.query]
  
  return jsonify(users)
  

@app.route("/api/afterlogin", methods=["GET"])
def afterlogin():
  return "hello"


@app.route('/api/languages', methods=['GET'])
def get_languages():
 
  languages = [lang.to_json() for lang in Language.query]
  return jsonify(languages)



@app.route('/api/services', methods=['GET'])
def get_services():
  services = [serv.to_json() for serv in Service.query]
  return jsonify(services)

@app.route('/api/services/user/id/<int:user_id>', methods=['GET'])
def get_user_services(user_id):
  user = User.query.filter_by(id=user_id).first()
  user_services = [service.to_json() for service in user.services]

  return jsonify(user_services)
