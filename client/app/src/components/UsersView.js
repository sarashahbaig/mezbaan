import React from "react";

import UserCardList from "./UserCardList";

class UsersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
      currentUser: this.props.currentUser
    };
  }

  render() {
    // const { users, error } = this.state;
    const { currentUser, users } = this.props;

    return (
      <section className="container">
        <UserCardList currentUser={currentUser} users={users} />
      </section>
    );
  }
}

export default UsersView;
