import React, { Component } from "react";
import axios from "axios";
import { Redirect, Route, Switch, withRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import UsersView from "./components/UsersView";
import Mission from "./components/Mission";
import Services from "./components/home/Services";
import Account from "./components/Account";
import Rating from "./components/Rating";
import Invite from "./components/home/Invite";
import { API_ROUTES } from "./constants";
import UserForm from "./components/common/UserForm";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      authenticated: false,
      currentUser: "",
      error: ""
    };
  }

  componentDidMount() {
    // this.getAllUsers();
    // window.localStorage.getItem("authenticated"),
    // window.localStorage.getItem("currentUser"),
    this.setState({
      authenticated: window.localStorage.getItem("authenticated"),
      currentUser: JSON.parse(window.localStorage.getItem("currentUser"))
    });
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
        console.log(error.message);
        this.setState({ error: error.message });
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
        this.setState({ authenticated: true, currentUser: res.data });
        window.localStorage.setItem("authenticated", true);
        window.localStorage.setItem("currentUser", JSON.stringify(res.data));
        this.props.history.push("/users");
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
        this.setState({ error: error.response.data });
      });
  };

  handleLogout = () => {
    this.setState({ authenticated: false });
    window.localStorage.removeItem("authenticated");
    window.localStorage.removeItem("currentUser");
    this.props.history.push("/");
  };

  handleSignUp = userData => {
    console.log(userData);
    axios
      .post(API_ROUTES.main + API_ROUTES.register, userData)
      .then(res => {
        console.log(res);
        // this.setState({ authenticated: true });
        // this.getAllUsers();
        // this.props.history.push("/users");
      })
      .then(() => {
        this.handleLogin(userData);
      })
      .then(() => {
        this.getAllUsers()
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { users, authenticated, currentUser, error } = this.state;

    return (
      <div>
        <Header
          handleLogout={this.handleLogout}
          authenticated={authenticated}
          currentUser={currentUser}
        />

        <Switch>
          <Route exact path="/">
            <Home users={users} />
          </Route>
          <Route path="/register">
            <Register handleSignUp={this.handleSignUp} />
          </Route>
          <Route path="/login">
            <Login handleLogin={this.handleLogin} error={error} />
          </Route>
          <Route path="/mission">
            <Mission />
          </Route>
          <PrivateRoute path="/users">
            <UsersView currentUser={currentUser} users={users} />
          </PrivateRoute>
          <PrivateRoute path="/rating">
            <Rating />
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/account">
            <Account currentUser={currentUser} />
          </PrivateRoute>

          <Route path="/account">
            <Rating />
          </Route>
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
