import React from "react";
import UserForm from "./common/UserForm";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { currentUser } = this.props;
    return <UserForm user={currentUser} />;
  }
}
export default Account;
