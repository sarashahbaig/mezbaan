import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/api/users")
      .then(res => res.data)
      .then(data => {
        console.log(data);
        this.setState({ users: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLogin = () => {
    axios
      .get("http://127.0.0.1:5000/api/login")
      .then(res => res.data)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogout = () => {
    axios
      .get("http://127.0.0.1:5000/api/logout")
      .then(res => res.data)
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Mezbaan</h1>
        {users.map((user, index) => (
          <h3 key={index}>
            {user.username} - {user.email}
          </h3>
        ))}
        <button className="btn btn-primary" onClick={this.handleLogin}>
          Login
        </button>
        <button className="btn btn-info" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

export default App;
