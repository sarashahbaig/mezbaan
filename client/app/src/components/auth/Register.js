import React from "react";
import Select from "react-select";
import AuthCard from "../common/AuthCard";
import { API_ROUTES } from "../../constants";
import axios from "axios";

const DAYS = [
  { value: "sunday", label: "Sunday" },
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wendesday", label: "Wendesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" }
];

const TASKS = [
  { value: "Learning English", label: "Learning English" },
  { value: "Learning to Drive", label: "Learning to Drive" },
  { value: "Finding a School", label: "Finding a School" },
  { value: "Finding a house/Apartment", label: "Finding a house/Apartment" },
  { value: "Finding Food", label: "Finding Food" },
  { value: "Finding Hospital", label: "Finding Hospital" },
  { value: "Finding a Job", label: "Finding a Job" },
  { value: "Filling out Form", label: "Filling out Form" },
  { value: "With Legal matters", label: "With Legal matters" }
];

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVolunteer: true,
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zipCode: "",
      username: "",
      password: "",
      email: "",
      languages: "",
      tasks: null,
      days: null,
      hours: "",
      description: "",
      apiLanguages: []
    };
  }

  componentDidMount() {
    this.getAllLanguages();
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

  handleTasksSelect = tasks => {
    this.setState({ tasks }, () =>
      console.log(`Option selected:`, this.state.tasks)
    );
  };

  handleDaysSelect = days => {
    this.setState({ days }, () =>
      console.log(`Option selected:`, this.state.days)
    );
  };
  handleRegisterSubmit = event => {
    event.preventDefault();
    this.props.handleSignUp({ ...this.state });
  };

  render() {
    const {
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
      tasks,
      days,
      hours,
      description,
      apiLanguages
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
            User
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
            <Select
              value={languages}
              onChange={this.handleLanguagesSelect}
              options={apiLanguages}
              isMulti={true}
            />
          </div>
          <div className="form-group">
            <Select
              value={tasks}
              onChange={this.handleTasksSelect}
              options={TASKS}
              isMulti={true}
            />
          </div>

          {isVolunteer && (
            <div>
              <div className="form-group">
                <Select
                  value={days}
                  onChange={this.handleDaysSelect}
                  options={DAYS}
                  isMulti={true}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hours">Time available to help</label>
                <input
                  className="form-control"
                  id="hours"
                  type="text"
                  name="hours"
                  value={hours}
                  onChange={this.handleInput}
                />
              </div>
            </div>
          )}
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
