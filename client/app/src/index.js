import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
// import Header from "./header";
// import Footer from "./footer";

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
);
