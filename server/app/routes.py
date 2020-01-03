from flask import Flask, request, jsonify, make_response, abort
from app import app, db, bcrypt
from app.models import User


@app.route("/", methods=["GET"])
def index():
  return make_response("home", 200)


@app.route("/api/register", methods=["POST"])
def register():

  username = request.json.get('username')
  email = request.json.get('email')
  password = request.json.get('password')

  if username is None or email is None or password is None:
      return make_response("One of the fields is missing", 400)

  pwd_hash = bcrypt.generate_password_hash(password)

  user = User(username=username, email=email, password_hash=pwd_hash)
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
    return make_response("No user found", 404)

  user_pwd = user.password_hash

  if not bcrypt.check_password_hash(user_pwd, password):
    return make_response("Username or passowrd incorrect", 401)

  return jsonify(user.serialize)

@app.route("/api/logout", methods=["GET"])
def logout():
  return make_response("You are now logged out", 200)

@app.route("/api/users", methods=["GET"])
def get_all_users():
  db_users = User.query.all()
  users = []
  for user in db_users:
    users.append(user.serialize)
  return jsonify(users)
  # i.serialize for i in qryresult.all()]
