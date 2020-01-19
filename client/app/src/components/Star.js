import React from "react";
import star from "../images/icon/star.svg";

class Star extends React.Component {
  render() {
    return (
      <div className="d-flex">
        <img className="icon-star" src={star} />
      </div>
    );
  }
}

export default Star;
