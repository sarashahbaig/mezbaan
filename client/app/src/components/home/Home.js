import React from "react";
import Hero from "./Hero";
import Invite from "./Invite";
import Features from "./Features";

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
      <section>
        <Hero />
        <div className="container-fluid">
          <Invite />
          <Features />
        </div>
      </section>
    );
  }
}

export default Home;
