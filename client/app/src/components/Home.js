import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      usersname: "",
      email: "",
      error: ""
    };
  }

  render() {
    const { id, username, email } = this.props;

    return (
      <div className="container p-3 my-3 border">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Volunteer</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {/* {users.map((user, index) => (
                const {id, username, email} = users;
                <tr key={index}>
                  <td>{username}</td>
                  <td>{email}</td>
                  <td>{id}</td>
                </tr>
              );
              ])} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
