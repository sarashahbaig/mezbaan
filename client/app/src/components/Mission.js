import React from "react";
import law from "../../src/images/law.jpg";
import housing from "../../src/images/housing.jpg";
import drive from "../../src/images/drive.jpg";
import finddoctor from "../../src/images/finddoctor.png";
import food from "../../src/images/food.jpg";
import learnenglish from "../../src/images/learnenglish.jpg";
import form from "../../src/images/form.jpeg";
import jobs from "../../src/images/jobs.jpg";
import school from "../../src/images/school.jpeg";
import { Link } from "react-router-dom";
import { SIGNUP } from "../constants";

// import Card from "../common/Card";

class Mission extends React.Component {
  render() {
    return (
      <section className="container">
        <h4>We Help with Finding...</h4>
        <div className="card-columns">
          <div className="card">
            <img src={law} className="card-img-top" alt="lawadvice"></img>
          </div>
          <div className="card">
            <img src={housing} className="card-img-top" alt="housinghelp"></img>
          </div>
          <div className="card">
            <img src={drive} className="card-img-top" alt="learn drive"></img>
          </div>
          <div className="card">
            <img src={finddoctor} className="card-img-top" alt="doctor"></img>
          </div>
          <div className="card">
            <img src={food} className="card-img-top" alt="find food"></img>
          </div>
          <div className="card">
            <img
              src={learnenglish}
              className="card-img-top"
              alt="learn esl"
            ></img>
          </div>
          <div className="card">
            <img src={form} className="card-img-top" alt="find food"></img>
          </div>
          <div className="card">
            <img src={jobs} className="card-img-top" alt="find food"></img>
          </div>
          <div className="card">
            <img src={school} className="card-img-top" alt="find food"></img>
          </div>
        </div>
        <div className="btn btn-primary btn-lg btn-block">
          <Link to={`${SIGNUP.link}`}>Join Us</Link>
        </div>
      </section>
    );
  }
}

export default Mission;
