import React from "react";
import { Link } from "react-router-dom";
import { HOME, MENU_ITEMS } from "../constants";

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
        <Link className="navbar-brand" to={`${HOME.link}`}>
          {HOME.name}
        </Link>

        <ul className="navbar-nav justify-content-right ml-auto">
          {authenticated ? (
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={this.props.handleLogout}
              >
                {`Logout ${firstName}`}
              </button>
            </li>
          ) : (
            MENU_ITEMS.map((item, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={`${item.link}`}>
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
