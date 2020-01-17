import React, { Component } from "react";
import create from "../../images/icon/create.svg";
import search from "../../images/icon/search.svg";
import connect from "../../images/icon/connect.svg";
const LOOKUP = [
  {
    img: create,
    title: "Create",
    discription: "Register an account and login"
  },
  {
    img: search,
    title: "Search",
    discription: "Lookup a services and users"
  },
  {
    img: connect,
    title: "Connect",
    discription: "Now, connect with the user through emails"
  }
];
class HowWorks extends Component {
  render() {
    return (
      <div className="mb-3">
        <h2 className="text-center text-secondary font-weight-light mb-3">
          How It Works
        </h2>

        <div className="row justify-content-center text-black-50">
          <div className="col-7">
            {LOOKUP.map((look, index) => {
              const { img, title, discription } = look;
              return (
                <div>
                  <div
                    className={`d-flex ${index === 1 && "flex-row-reverse"}`}
                  >
                    <h5 className=" text-center p-2 step-number rounded-circle bg-light border border-info d-inline-block">
                      {index + 1}
                    </h5>
                    <h2 className="ml-2 mr-2">{title}</h2>
                  </div>
                  <div
                    className={`d-flex ${index === 1 &&
                      "flex-row-reverse mr-5"}`}
                  >
                    <p>{discription}</p>
                    <img className="img-responsive icon m-5" src={img}></img>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default HowWorks;
