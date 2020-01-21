import React from "react";
import { withRouter } from "react-router-dom";
import Select from "react-select";
import AuthCard from "../common/AuthCard";
import { API_ROUTES } from "../../constants";
import axios from "axios";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../../constants";
import Card from "./Card";
import PhotoCard from "./PhotoCard";
import UserCard from "../UserCard";

const DAYS = [
  { value: "sunday", label: "Sunday" },
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wendesday", label: "Wendesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" }
];

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isUpdate: false,
      user: JSON.parse(window.localStorage.getItem("currentUser")),
      isVolunteer: "",
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      zipCode: "",
      username: "",
      password: "",
      email: "",
      languages: this.props.user.languages,
      services: null,
      days: "",
      hours: "",
      description: "",
      apiLanguages: "",
      apiServices: ""
    };
  }

  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem("currentUser"));

    this.getAllLanguages();
    this.getAllServices();
    this.setState({
      ...this.state,
      ...user
    });

    this.setState({ services: this.props.user.services });
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
        });
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
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  handleLanguagesSelect = languages => {
    this.setState({ languages }, () =>
      console.log(`Option selected:`, this.state.languages)
    );
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
  // handleUserFormSubmit = event => {
  //   event.preventDefault();

  handleUserUpdateSubmit = e => {
    e.preventDefault();
    const { user } = this.props;
    console.log(user);
    const languageValues = user.languages.map(lang => lang.value);
    console.log(languageValues);

    const serviceValues = user.services.map(serv => serv.value);
    console.log(serviceValues);
    const userData = {
      ...this.state.user
      // languages: languageValues,
      // services: serviceValues
    };

    console.log(userData);
    axios
      .post(API_ROUTES.main + API_ROUTES.updateProfile, userData)
      .then(res => {
        console.log(res);
        window.localStorage.setItem("currentUser", JSON.stringify(res.data));

        // this.setState({ authenticated: true });
        // this.getAllUsers();
        this.props.history.push("/users");
        this.setState({
          user: res.data,
          isUpdate: false
        });
      })

      .catch(error => {
        console.log(error);
      });
  };
  handleUpdate = user => {
    // this.props.handleUpdateClick(user);
  };

  handleEditClick = () => {
    this.setState({ isUpdate: true });
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
      days,
      hours,
      description
    } = this.state.user;

    const { isUpdate } = this.state;

    const { apiLanguages, apiServices, user } = this.state;
    const languages = this.props.user.languages
      ? this.props.user.languages.map(lang => {
          return {
            value: lang.id,
            label: lang.language
          };
        })
      : [];
    const services = this.props.user.services
      ? this.props.user.services.map(item => {
          return {
            value: item.id,
            label: item.service
          };
        })
      : [];

    return (
      <div className="mt-5">
        {isUpdate ? (
          <AuthCard title="Update Profile">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="volunteer"
                onChange={this.handleUserType}
                checked={this.state.user && isVolunteer}
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

            <form onSubmit={this.handleUserUpdateSubmit}>
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
                  value={services}
                  onChange={this.handleServicesSelect}
                  options={apiServices}
                  isMulti={true}
                />
              </div>

              {this.state.user && isVolunteer && (
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
                  Update
                </button>
              </div>
            </form>
          </AuthCard>
        ) : (
          <UserCard user={this.state.user}>
            <button className="btn btn-success" onClick={this.handleEditClick}>
              Edit
            </button>
          </UserCard>
        )}
      </div>
    );
  }
}

export default withRouter(UserForm);
