from flask import Flask
from flask import jsonify
from flask import make_response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
  users = [{"name": "John", "age": 22}, {"name": "Sam", "age": 31}]
  return jsonify(users, 200)

@app.route("/login")
def login():
  user = {"name": "Jon", "age": 22}
  return jsonify(user)

@app.route("/logout")
def logout():
  return "You are now logged out"

if __name__ == "__main__":
  app.run(debug=True)