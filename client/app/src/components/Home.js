import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { users } = this.props;

    return (
      <main>
        <h1 className="row justify-content-center  text-muted mt-3">
          Meezban this is a home page
        </h1>
        <h1>Mezbaan this is the app page</h1>
        {users.map((user, index) => (
          <h3 key={index}>
            {user.username} - {user.email}
          </h3>
        ))}
      </main>
    );
  }
}

export default Home;
