import React from "react";
import axios from "axios";
import { API_ROUTES } from "../constants";
import UserCardList from "./UserCardList";

class UsersView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: "",
      currentUser: this.props.currentUser
    };
  }

  componentDidMount() {
    axios
      .get(API_ROUTES.main + API_ROUTES.users)
      .then(response => {
        const users = response.data;
        if (this.state.currentUser.isVolunteer) {
          const immigrants = users.filter(user => user.isVolunteer == false);
          this.setState({ users: immigrants });
        } else {
          const volunteers = users.filter(user => user.isVolunteer == true);
          this.setState({ users: volunteers });
        }
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }

  render() {
    const { users, error } = this.state;
    const { currentUser } = this.props;

    return (
      <section className="container">
        <UserCardList users={users} />
      </section>
    );
  }
}

export default UsersView;
