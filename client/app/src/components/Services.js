import React from "react";
import help from "../../src/images/help.jpg";

class Services extends React.Component {
  render() {
    return (
      <section>
        <img src={help} className="img-fluid" alt="helpinghand"></img>

        <div className="container">
          <h2>I need help with...</h2>

          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Learning English</h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Learning to Drive </h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Finding a School</h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Finding a house/Apartment</h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Finding Food</h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Finding Hospital</h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Finding a Job</h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Filling out Form</h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">With Legal matters</h5>
            </div>
          </div>
          <div className="card-columns">
            <div className="card">
              <h5 className="text-center">Buying a Car</h5>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Services;
