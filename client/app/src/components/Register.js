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
    const { username, email, password } = this.state;
    this.props.handleSignUp({ username, email, password });
  };

  render() {
    const { isVolunteer, username, password, email, hours } = this.state;
    return (
      <div className="container">
        <h1>Register</h1>

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

        <form onSubmit={this.handleRegisterSubmit}>
          <div class="form-group">
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
          <div class="form-group">
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
          <div class="form-group">
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
          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
