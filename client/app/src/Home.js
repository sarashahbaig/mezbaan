import React from "react";
import axios from "axios";

class Home extends React.Component {
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
        const { users } = data;
        console.log(users);
        this.setState({ users: users });
        console.log(this.state);
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
        <h1 class="row justify-content-center  text-muted mt-3">Meezban</h1>
      </div>
    );
  }
}

export default Home;
