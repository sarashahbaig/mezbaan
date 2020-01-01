from flask import Flask, request, jsonify, make_response, abort
from app import app, db
from app.models import User


@app.route("/", methods=["GET"])
def index():
  name =  request.args.get('username')
  user = User.query.all()[0]
  # return jsonify(users, 200)
  return make_response(user.username)


@app.route("/api/register", methods=["POST"])
def register():

  username = request.json.get('username')
  email = request.json.get('email')
  password = request.json.get('password')

  if username is None or email is None or password is None:
      return make_response("One of the fields is missing", 400)

  user = User(username=username, email=email, password_hash=password)
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

  return jsonify(user.username)

@app.route("/api/logout", methods=["GET"])
def logout():
  
  return "You are now logged out"
