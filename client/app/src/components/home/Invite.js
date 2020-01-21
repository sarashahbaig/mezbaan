import React from "react";
import Card from "../common/Card";
import { API_ROUTES, REGISTER } from "../../constants";
import axios from "axios";
import { Link } from "react-router-dom";
import { SIGNUP } from "../../constants";

class Invite extends React.Component {
  render() {
    return (
      <section>
        <div className="row">
          <div className="col">
            {/* <Link to={`${SIGNUP.link}`}>
              <Card background="bg-warning">Sign Up as Volunteer</Card>
            </Link> */}
          </div>
          <div className="col">
            {/* <Link to={`${SIGNUP.link}`}>
              <Card background="bg-success" button>
                Sign Up as Immigrant
              </Card>
            </Link> */}
          </div>
        </div>
      </section>
    );
  }
}

export default Invite;
