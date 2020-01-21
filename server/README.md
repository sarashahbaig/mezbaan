# Run Locally

`source ~/.virtualenvs/capstone/bin/activate`

`flask run`

# To run shell

`flask shell`
`from app import db`
`db.drop_all()`
`db.create_all()`

# OR, simply run this bash script file

`export FLASK_APP=capstone.py`

`source ~/.virtualenvs/capstone/bin/activate`  
`flask shell`
`./script.sh`

`flask run`

`./script.sh`

# How to add languages and services in sql-script

INSERT INTO `service`(`service`) VALUES ('Buying a Car');
INSERT INTO `service`(`service`) VALUES ('With Legal matters');
INSERT INTO `service`(`service`) VALUES ('Filling out Form');
INSERT INTO `service`(`service`) VALUES ('Finding a Job');
INSERT INTO `service`(`service`) VALUES ('Finding Hospital');
INSERT INTO `service`(`service`) VALUES ('Finding Food');
INSERT INTO `service`(`service`) VALUES ('Finding a house/Apartment');
INSERT INTO `service`(`service`) VALUES ('Finding a School');
INSERT INTO `service`(`service`) VALUES ('Learning to Drive');
INSERT INTO `service`(`service`) VALUES ('Learning English');

whats didMount doing?
whats did prevent doing?
