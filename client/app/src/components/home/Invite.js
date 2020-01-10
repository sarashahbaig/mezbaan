import React from "react";
import Card from "../common/Card";

class Invite extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col">
            <Card background="bg-warning">Sign Up as Volunteer</Card>
          </div>
          <div className="col">
            <Card background="bg-success">Sign Up as Immigrant</Card>
          </div>
        </div>
      </section>
    );
  }
}

export default Invite;
