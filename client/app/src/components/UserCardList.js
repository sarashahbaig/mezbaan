import React, { Component } from "react";
import UserCard from "./UserCard";
import EmailModal from "./EmailModal";

class UserCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalUser: "",
      showModal: false
    };
  }

  handleEmailSendClick = user => {
    this.setState({ modalUser: user, showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    const { modalUser, showModal } = this.state;
    const { users } = this.props;
    return (
      <div>
        {users.map(user => (
          <UserCard user={user} handleEmailSendClick={this.handleEmailSendClick} />
        ))}
        {modalUser && (
          <EmailModal
            modalUser={modalUser}
            showModal={showModal}
            hideModal={this.hideModal}
          />
        )}
      </div>
    );
  }
}

export default UserCardList;
