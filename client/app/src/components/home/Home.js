import React from "react";
import Hero from "./Hero";
import Invite from "./Invite";
import Features from "./Features";
import Services from "./Services";
import HowWorks from "./HowWorks";

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
      <div>
        <Hero />
        <div className="container">
          <Features />
          <HowWorks />
          <Services />
        </div>
      </div>
    );
  }
}

export default Home;
