import React, { Component } from "react";
import axios from "axios";
import { Redirect, Route, Switch, withRouter } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import { API_ROUTES } from "./constants";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      authenticated: false
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(API_ROUTES.main + API_ROUTES.users)
      .then(res => res.data)
      .then(data => {
        console.log(data);
        this.setState({ users: data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  handleLogin = userdata => {
    const { username, password } = userdata;

    console.log(userdata);
    axios
      .post(API_ROUTES.main + API_ROUTES.login, {
        username: username,
        password: password
      })
      .then(res => {
        console.log(res);
        this.setState({ authenticated: true });
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleLogout = () => {
    this.setState({ authenticated: false });
    this.props.history.push("/");
  };

  handleSignUp = userdata => {
    const { username, email, password } = userdata;
    axios
      .post(API_ROUTES.main + API_ROUTES.register, {
        username: username,
        email: email,
        password: password
      })
      .then(res => {
        console.log(res);
        this.setState({ authenticated: true });
        this.getAllUsers();
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { users, authenticated } = this.state;

    return (
      <div>
        <Header
          handleLogout={this.handleLogout}
          authenticated={authenticated}
        />
        <Switch>
          <Route exact path="/">
            <Home users={users} />
          </Route>
          <Route path="/register">
            <Register handleSignUp={this.handleSignUp} />
          </Route>
          <Route path="/login">
            <Login handleLogin={this.handleLogin} />
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
