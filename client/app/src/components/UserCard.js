import React, { Component } from "react";
import md5 from "md5";
import Card from "./common/Card";
import Rating from "./Rating";

class UserCard extends Component {
  handleSendEmailClick = user => {
    this.props.handleEmailSendClick(user);
  };
  render() {
    console.log(md5("message"));
    const { user } = this.props;
    const {
      email,
      firstName,
      lastName,
      city,
      state,
      zipCode,
      languages,
      description,
      isVoluteer,
      services,
      ratings,
      days_can_volunteer,
      time_can_volunteer,
      currentRating
    } = user;

    const { img } = this.props;
    const hash = md5(email);
    return (
      <Card>
        <div className="row">
          <div className="col-3">
            <img className="rounded-circle pr-3" src={img} />
          </div>
          <div className="col-7">
            <h6>
              {firstName} {lastName}
            </h6>
            <div>
              <p>Email: {email}</p>
              <p>
                <span className="text-danger">
                  Location: {state} {zipCode}
                </span>
              </p>
            </div>

            <p>
              <span className="text-danger">Languages:&nbsp;</span>
              {languages
                .map(item => {
                  return `${item.language} `;
                })
                .join("- ")}
            </p>
            <p>
              <span className="text-danger">Services:&nbsp;</span>
              {services
                .map(item => {
                  return `${item.service} `;
                })
                .join("- ")}
            </p>
            {!isVoluteer && <Rating ratings={ratings} />}
          </div>

          <div className="col-2">
            <div className="d-flex justify-content-end">
              <button
                class="btn btn-primary"
                onClick={() => this.handleSendEmailClick(user)}
              >
                Send an Email
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default UserCard;
