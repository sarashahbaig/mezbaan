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

    const { img, buttonText } = this.props;
    const hash = md5(email);
    return (
      <Card>
        <div className="row">
          <div className="col-3">
            <img className="rounded-circle" src={img} />
          </div>
          <div className="col-7 text-info">
            <h6>
              Name: {firstName} {lastName}
            </h6>
            <div className="text-info">
              <p>Email: {email}</p>
              <p>
                <span className="text-info">
                  Location: {state} {zipCode}
                </span>
              </p>
            </div>

            <p className="text-info">
              <span>Languages:&nbsp;</span>
              {languages
                .map(item => {
                  return `${item.language} `;
                })
                .join("- ")}
            </p>
            <p className="text-info">
              <span>Services:&nbsp;</span>
              {services
                .map(item => {
                  return `${item.service} `;
                })
                .join("- ")}
            </p>
            <div className="text-info">
              {!isVoluteer && <Rating ratings={ratings} />}
            </div>
          </div>

          <div className="col-2">
            <div className="d-flex justify-content-end">
              {buttonText && (
                <button
                  className="btn btn-primary"
                  onClick={() => this.handleSendEmailClick(user)}
                >
                  Send Email
                </button>
              )}
              {this.props.children}
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default UserCard;
