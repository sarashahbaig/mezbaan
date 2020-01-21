import React, { Component } from "react";
import Card from "../common/Card";

export default class SearchFeature extends Component {
  render() {
    return (
      <Card>
        <h3 className="text-center text-secondary">Start connecting today</h3>
        <h6 className="text-center text-secondary">
          It's fast, easy, and hassle-free!
        </h6>
        <form>
          <input
            className="form-control mr-sm-2 outline-success my-2 my-sm-0"
            type="search"
            placeholder="Search"
            aria-label="Search"
          ></input>
        </form>
        <p className="text-center text-secondary">
          This is the place were we invite worldwide people to provide
          assistance and support by giving some time from there busy life to the
          Immigrants who needs help for. It's important to spend time exploring
          your options and which opportunities are the best fit based on your
          interests, skills, and the time you have available to volunteer.
          <mark> free </mark>.
        </p>
      </Card>
    );
  }
}
