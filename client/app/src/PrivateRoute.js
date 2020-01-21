import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class PrivateRoute extends React.Component {
  render() {
    return (
      <Route>
        {window.localStorage.getItem("authenticated") === null ? (
          <Redirect to="/login" />
        ) : (
          this.props.children
        )}
      </Route>
    );
  }
}

export default withRouter(PrivateRoute);
