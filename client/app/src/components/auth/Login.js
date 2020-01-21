import React from "react";
import AuthCard from "../common/AuthCard";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLoginSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.handleLogin({ username, password });
  };

  render() {
    const { username, password } = this.state;
    const { error } = this.props;
    return (
      <AuthCard title="Login">
        <form onSubmit={this.handleLoginSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              className="form-control"
              id="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">password</label>
            <input
              className="form-control"
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleInput}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary flex-grow-1" type="submit">
              Login
            </button>
          </div>
        </form>
      </AuthCard>
    );
  }
}

export default Login;
