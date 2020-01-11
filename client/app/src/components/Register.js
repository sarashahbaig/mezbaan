import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVolunteer: false,
      username: "",
      email: "",
      password: "",
      hours: ""
      //   time:"",
      //   Day:""
    };
  }

  handleUserType = event => {
    const user = event.target.value;
    this.setState({
      isVolunteer: user === "volunteer"
    });
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleRegisterSubmit = event => {
    event.preventDefault();
    const { username, email, password, hours } = this.state;
    this.props.handleSignUp({ username, email, password, hours });
  };

  render() {
    const {
      isVolunteer,
      username,
      password,
      email,
      hours,
      firstname,
      lastname,
      language_know,
      select_task,
      select_day_available,
      essay,
      city,
      state,
      zip
    } = this.state;
    return (
      <div className="container">
        <div className="container p-3 my-3 border">
          <h1>Register</h1>
          <hr></hr>

          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="volunteer"
              onChange={this.handleUserType}
            />
            <label className="form-check-label" for="inlineRadio1">
              Volunteer
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="user"
              onChange={this.handleUserType}
            />
            <label className="form-check-label" for="inlineRadio2">
              User
            </label>
          </div>
          <hr></hr>

          <form onSubmit={this.handleRegisterSubmit}>
            <div class="form-group ">
              <div className="row">
                <div class="col">
                  <label for="firstname">First Name</label>
                  <input
                    className="form-control"
                    id="firstname"
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={this.handleInput}
                  />
                </div>
                <div class="col">
                  <label for="lastname">Last Name</label>
                  <input
                    className="form-control"
                    id="lastname"
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={this.handleInput}
                  />
                </div>
              </div>
            </div>

            <div className="form-group ">
              <div className="row">
                <div class="col-md-6 mb-3">
                  <label for="city">City</label>
                  <input
                    className="form-control"
                    id="city"
                    type="text"
                    name="city"
                    value={city}
                    onChange={this.handleInput}
                  />
                </div>
                <div class="col-md-3 mb-3">
                  <label for="state">State</label>
                  <input
                    className="form-control"
                    id="state"
                    type="text"
                    name="state"
                    value={state}
                    onChange={this.handleInput}
                  />
                </div>
                <div className="col-md-3 mb-3">
                  <label for="zip">Zip</label>
                  <input
                    className="form-control"
                    id="zip"
                    type="text"
                    name="zip"
                    value={zip}
                    onChange={this.handleInput}
                  />
                </div>
              </div>
            </div>

            <div class="form-group ">
              <div className="row">
                <div class="col">
                  <label for="username">Username</label>
                  <input
                    className="form-control"
                    id="username"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.handleInput}
                  />
                </div>
                <div class="col">
                  <label for="password">Password</label>
                  <input
                    className="form-control"
                    id="password"
                    type="text"
                    name="password"
                    value={password}
                    onChange={this.handleInput}
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="email">Email</label>
              <input
                className="form-control"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={this.handleInput}
              />
            </div>

            <div className="form-group">
              <label for="language_know">Language Known</label>
              <input
                className="form-control"
                id="language_know"
                type="text"
                name="language_know"
                value={language_know}
                onChange={this.handleInput}
              />
            </div>

            {/* ------------------------------- */}

            <div className="form-group">
              <label for="select_task">Select a Task</label>
              <select className="form-control" id="select_task">
                <option selected>Choose...</option>
                <option value="1">Learning English</option>
                <option value="2">Learning to Drive</option>
                <option value="3">Finding a School</option>
                <option value="4">Finding a house/Apartment</option>
                <option value="5">Finding Food</option>
                <option value="6">Finding Hospital</option>
                <option value="1">Finding a Job</option>
                <option value="2">Filling out Form</option>
                <option value="3">With Legal matters</option>
                name="select_task" value={select_task}
                onChange={this.handleInput}
                />
              </select>
            </div>

            <div className="form-group">
              <label for="select_day_available">Select day available</label>
              <select className="form-control" id="select_day_available">
                <option selected>Choose...</option>
                <option value="1">Sunday</option>
                <option value="2">Monday</option>
                <option value="3">Tuesday</option>
                <option value="4">Wednesday</option>
                <option value="5">Thursday</option>
                <option value="6">Friday</option>
                <option value="1">Saturday</option>
                name="select_day_available" value={select_day_available}
                onChange={this.handleInput}
                />
              </select>
            </div>

            <div className="form-group">
              <label for="hours">Time available to help</label>
              <input
                className="form-control"
                id="hours"
                type="text"
                name="hours"
                value={hours}
                onChange={this.handleInput}
              />
            </div>
            <div className="form-group">
              <label for="essay">Write a short intro about yourself</label>
              <input
                className="form-control"
                id="essay"
                type="text"
                name="essay"
                value={essay}
                onChange={this.handleInput}
              />
            </div>

            {isVolunteer && (
              <div class="form-group">
                <label for="hours">Hours</label>
                <input
                  className="form-control"
                  id="hours"
                  type="text"
                  name="hours"
                  value={hours}
                  onChange={this.handleInput}
                />
              </div>
            )}

            <button className="btn btn-secondary" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
