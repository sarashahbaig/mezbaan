import React from "react";

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
    return (
      <div className="container">
        <div className="container p-3 my-3 border">
          <h1>Login</h1>
          <form onSubmit={this.handleLoginSubmit}>
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
              <label for="exampleInputEmail1">password</label>
              <input
                className="form-control"
                id="password"
                type="text"
                name="password"
                value={password}
                onChange={this.handleInput}
              />
            </div>
            <button className="btn btn-secondary" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
