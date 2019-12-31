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
      .get("http://127.0.0.1:5000/")
      .then(res => res.data)
      .then(data => {
        console.log(data[0]);
        this.setState({ users: data[0] });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLogin = () => {
    axios
      .get("http://127.0.0.1:5000/login")
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
      .get("http://127.0.0.1:5000/logout")
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
          <h3 key={index}>{user.name}</h3>
        ))}
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default App;
