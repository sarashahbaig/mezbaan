import React from "react";
import "./Hero.css";

class Hero extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Mezbaan</h1>
            <p>Welcome to our coummunity</p>
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
