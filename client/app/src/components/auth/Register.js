import React from "react";
import Select from "react-select";
import { DateTime } from "react-datetime-bootstrap";
import moment from "moment";
import AuthCard from "../common/AuthCard";
import { API_ROUTES } from "../../constants";
import axios from "axios";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../../constants";

const DAYS = [
  { value: 1, label: "Monday" },
  { value: 2, label: "Tuesday" },
  { value: 3, label: "Wendesday" },
  { value: 4, label: "Thursday" },
  { value: 5, label: "Friday" },
  { value: 6, label: "Saturday" },
  { value: 7, label: "Sunday" }
];

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDatetime: moment(),
      isVolunteer: true,
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zipCode: "",
      username: "",
      password: "",
      email: "",
      languages: null,
      services: null,
      days: "",
      datetimeAvailable: "",
      description: "",
      apiLanguages: "",
      apiServices: ""
    };
  }

  componentDidMount() {
    this.getAllLanguages();
    this.getAllServices();
  }

  getAllLanguages = () => {
    axios
      .get(API_ROUTES.main + API_ROUTES.languages)
      .then(res => res.data)
      .then(data => {
        data.forEach(lang => {
          const language = {
            value: lang.id,
            label: lang.language
          };
          this.setState({
            apiLanguages: [...this.state.apiLanguages, language]
          });
        });
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  getAllServices = () => {
    axios
      .get(API_ROUTES.main + API_ROUTES.services)
      .then(res => res.data)
      .then(data => {
        data.forEach(serv => {
          const service = {
            value: serv.id,
            label: serv.service
          };

          this.setState({
            apiServices: [...this.state.apiServices, service]
          });
          console.log(this.state.apiServices);
        });
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleUserType = event => {
    const user = event.target.value;
    this.setState({
      isVolunteer: user === "volunteer"
    });
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLanguagesSelect = languages => {
    this.setState({ languages }, () =>
      console.log(`Option selected:`, this.state.languages)
    );
  };

  handleDayInput = datetime => {
    this.setState({ datetimeAvailable: datetime, selectedDatetime: datetime });
  };

  handleServicesSelect = services => {
    this.setState({ services }, () =>
      console.log(`Option selected:`, this.state.services)
    );
  };

  handleDaysSelect = days => {
    this.setState({ days }, () =>
      console.log(`Option selected:`, this.state.days)
    );
  };
  handleRegisterSubmit = event => {
    event.preventDefault();

    const languageValues = this.state.languages.map(lang => lang.value);
    console.log(languageValues);

    const serviceValues = this.state.services.map(serv => serv.value);
    console.log(serviceValues);

    const daysValues = this.state.days.map(day => day.value);

    console.log(daysValues);

    this.props.handleSignUp({
      ...this.state,
      languages: languageValues,
      services: serviceValues,
      days: daysValues
    });
  };

  render() {
    const {
      selectedDatetime,
      isVolunteer,
      firstName,
      lastName,
      city,
      state,
      zipCode,
      username,
      password,
      email,
      languages,
      services,
      days,
      hours,
      description,
      apiLanguages,
      apiServices
    } = this.state;
    return (
      <AuthCard title="Register">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="volunteer"
            onChange={this.handleUserType}
            checked={isVolunteer}
          />
          <label className="form-check-label" htmlFor="inlineRadio1">
            Volunteer
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="user"
            onChange={this.handleUserType}
          />
          <label className="form-check-label" htmlFor="inlineRadio2">
            Immigrant
          </label>
        </div>
        <div className="dropdown-divider" />

        <form onSubmit={this.handleRegisterSubmit}>
          <div className="form-group ">
            <div className="row">
              <div className="col">
                <label htmlFor="firstname">First Name</label>
                <input
                  className="form-control"
                  id="firstname"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleInput}
                />
              </div>
              <div className="col">
                <label htmlFor="lastname">Last Name</label>
                <input
                  className="form-control"
                  id="lastname"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleInput}
                />
              </div>
            </div>
          </div>
          <div className="form-group ">
            <div className="row">
              <div className="col-md-6 mb-1">
                <label htmlFor="city">City</label>
                <input
                  className="form-control"
                  id="city"
                  type="text"
                  name="city"
                  value={city}
                  onChange={this.handleInput}
                />
              </div>
              <div className="col-md-3 mb-1">
                <label htmlFor="state">State</label>
                <input
                  className="form-control"
                  id="state"
                  type="text"
                  name="state"
                  value={state}
                  onChange={this.handleInput}
                />
              </div>
              <div className="col-md-3 mb-1">
                <label htmlFor="zip">Zip</label>
                <input
                  className="form-control"
                  id="zip"
                  type="text"
                  name="zipCode"
                  value={zipCode}
                  onChange={this.handleInput}
                />
              </div>
            </div>
          </div>
          <div className="form-group ">
            <div className="row">
              <div className="col">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  id="username"
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.handleInput}
                />
              </div>
              <div className="col">
                <label htmlFor="password">Password</label>
                <input
                  className="form-control"
                  id="password"
                  type="text"
                  name="password"
                  value={password}
                  onChange={this.handleInput}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hours">Languages You Speak</label>
            <Select
              value={languages}
              onChange={this.handleLanguagesSelect}
              options={apiLanguages}
              isMulti={true}
            />
          </div>
          <div className="form-group">
            <label htmlFor="hours">{`Services You ${
              isVolunteer ? `Can` : `Want`
            } Help With`}</label>
            <Select
              value={services}
              onChange={this.handleServicesSelect}
              options={apiServices}
              isMulti={true}
            />
          </div>
          <div>
            <div className="form-group">
              <label htmlFor="hours">Day(s) Available</label>
              <Select
                value={days}
                onChange={this.handleDaysSelect}
                options={DAYS}
                isMulti={true}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hours">Time available to help</label>
              <DateTime
                pickerOptions={{ format: "LL" }}
                value={selectedDatetime}
                name="days"
                onChange={this.handleDayInput}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">
              Write a short intro about yourself
            </label>
            <textarea
              className="form-control"
              aria-label="With textarea"
              id="description"
              type="text"
              name="description"
              value={description}
              onChange={this.handleInput}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary flex-grow-1" type="submit">
              Register
            </button>
          </div>
        </form>
      </AuthCard>
    );
  }
}

export default Register;
