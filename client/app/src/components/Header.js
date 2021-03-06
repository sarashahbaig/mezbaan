import React from "react";
import { Link } from "react-router-dom";
import { HOME, MENU_ITEMS, USERFORM } from "../constants";
import logo from "../../src/images/logo.svg";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "home"
    };
  }

  handleNavClick = item => {
    this.setState({
      activeItem: item
    });
  };
  render() {
    const { authenticated, currentUser } = this.props;
    const firstName = currentUser !== null ? currentUser.firstName : "";

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top d-flex shadow-lg bg-white rounded">
        <span className="text-muted "></span>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="navbar-brand font-weight-bold " to={`${HOME.link}`}>
          <img src={logo}></img> {HOME.name}
        </Link>

        <ul className="navbar-nav justify-content-right ml-auto ">
          {authenticated ? (
            <React.Fragment>
              <li
                className="nav-item nav-link btn btn-link"
                onClick={this.props.handleLogout}
              >
                {`Logout`}
              </li>

              <li>
                <Link
                  className="nav-item nav-link btn btn-link"
                  to={`${USERFORM.link}`}
                >{`Hi ${firstName}`}</Link>
              </li>
            </React.Fragment>
          ) : (
            MENU_ITEMS.map((item, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link
                    className="nav-item nav-link btn btn-link"
                    to={`${item.link}`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })
          )}
        </ul>
      </nav>
    );
  }
}

export default Header;
