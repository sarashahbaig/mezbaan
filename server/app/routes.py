from flask import Flask, request, jsonify, make_response, abort
from app import app, db, bcrypt
from app.models import User, Language, Service, Rating


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
  ratings = request.json.get('ratings')
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

  user_ratings = []
  for rating_id in ratings:
    rating = Rating.query.filter_by(id=rating_id).first()
    user_ratings.append(rating)
  
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
    "description": description,
    "is_volunteer": is_volunteer,
    "languages": user_languages,
    "services": user_services,
    "ratings": user_ratings,
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



@app.route('/api/ratings', methods=['GET', 'POST'])
def rate_volunteer():
  ratings = [rate.to_json() for rate in Rating.query]
  return jsonify(ratings)


@app.route('/api/users/id/<int:user_id>', methods=['GET'])
def get_user_by_id(user_id):
  user = User.query.filter_by(id=user_id).first().to_json()
  return jsonify(user)

@app.route('/api/languages/user/id/<int:user_id>', methods=['GET'])
def get_user_languages(user_id):
  user = User.query.filter_by(id=user_id).first()
  user_languages = [language.to_json() for language in user.languages]

  return jsonify(user_languages)

@app.route('/api/services/user/id/<int:user_id>', methods=['GET'])
def get_user_services(user_id):
  user = User.query.filter_by(id=user_id).first()
  user_services = [service.to_json() for service in user.services]

  return jsonify(user_services)

@app.route('/api/services/<int:service_id>', methods=["POST"])
def update_user_service(service_id):
  db_service = Service.query.filter_by(id=service_id).first()
  new_service = request.json.get("service")
  db_service.service = new_service
  db.session.commit()

  return make_response("Service successfully updated", 200)

@app.route('/api/user/<int:user_id>', methods=["DELETE"])
def delete_user(user_id):
  user = User.query.filter_by(id=user_id).first()
  db.session.delete(user)
  db.session.commit()

  return make_response("User successfully deleted",200)
  

# CREATE A NEW Service
@app.route('/api/services', methods=["POST"])
def create_service():
  service_name = request.json.get('service')
  print(service_name)
  service = Service(service=service_name)
  db.session.add(service)
  db.session.commit()

  return jsonify(service.to_json())