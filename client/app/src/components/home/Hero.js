import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import { HOME } from "../../constants";

class Hero extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Mezbaan</h1>
            <p>Welcome to our coummunity</p>
            <Link to={`${HOME.link}`}>
              <button className="btn btn-primary">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
