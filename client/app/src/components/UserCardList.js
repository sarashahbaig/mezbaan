import React, { Component } from "react";
import UserCard from "./UserCard";
import EmailModal from "./EmailModal";

const IMAGES = [
  "https://material-ui.com/static/images/avatar/1.jpg",
  "https://material-ui.com/static/images/avatar/2.jpg",
  "https://material-ui.com/static/images/avatar/3.jpg",
  "https://material-ui.com/static/images/avatar/4.jpg"
];
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
        {users.map((user, index) => (
          <UserCard
            user={user}
            handleEmailSendClick={this.handleEmailSendClick}
            img={IMAGES[index]}
          />
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
