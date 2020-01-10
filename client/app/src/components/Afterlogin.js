import React from "react";
import axios from "axios";

class Afterlogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      usersname: "",
      email: ""
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
          <h2>Our Volunteers</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="col-md-3">Picture</th>
                <th className="col-md-2">First name</th>
                <th className="col-md-3">Last name</th>
                <th className="col-md-3">Email</th>
                <th className="col-md-3">Day available</th>
                <th className="col-md-3">Time can volunteer</th>
                <th className="col-md-3">Lauguage Known</th>
                <th className="col-md-3">About</th>
                <th className="col-md-3">Connect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
              </tr>
              <tr>
                <td className="col-md-1">here</td>
                <td className="col-md-2">here</td>
                <td className="col-md-3">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
              </tr>
              <tr>
                <td className="col-md-1">here</td>
                <td className="col-md-2">here</td>
                <td className="col-md-3">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
              </tr>
            </tbody>
          </table>

          <h2 className="sub-header">Our Student</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th className="col-md-3">Picture</th>
                <th className="col-md-2">First name</th>
                <th className="col-md-3">Last name</th>
                <th className="col-md-3">Email</th>
                <th className="col-md-3">Day available</th>
                <th className="col-md-3">Time can volunteer</th>
                <th className="col-md-3">Lauguage Known</th>
                <th className="col-md-3">about</th>
                <th className="col-md-3">Connect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
              </tr>
              <tr>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
              </tr>
              <tr>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
                <td className="col-md-1">here</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Afterlogin;
