from flask import Flask
from flask import jsonify
from flask import make_response

app = Flask(__name__)

@app.route("/")
def home():
  return make_response({"res": "change"}, 200)

@app.route("/login")
def login():
  user = {"name": "Jon", "age": 22}
  return jsonify(user)

if __name__ == "__main__":
  app.run(debug=True)