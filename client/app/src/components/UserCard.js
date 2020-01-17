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
      zip_code,
      languages,
      description,
      is_voluteer,
      services,
      ratings,
      days_can_volunteer,
      time_can_volunteer,
      currentRating
    } = user;

    const hash = md5(email);
    return (
      <Card>
        <div className="row">
          <div className="col-3">
            <img src={`https://www.gravatar.com/avatar/${hash}`} />
          </div>
          <div className="col-7">
            <h6>
              {firstName} {lastName}
            </h6>
            <p>Languages: {languages.map(item => item.language)}</p>
            <div>Services:</div>
            <ul>
              {services.map(item => (
                <li>{item.service}</li>
              ))}
            </ul>
            <Rating ratings={ratings}/>
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
