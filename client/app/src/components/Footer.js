import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="container-fluid bg-primary text-white p-4">
        <div class="row">
          <div class="col">
            <h6>About</h6>
            <h6>Contant</h6>
            <h6>Help</h6>
          </div>
          <div class="col">2 of 2</div>
          <div class="col">2 of 2</div>
        </div>
        <div class="row">
          <div class="col text-center">Copyright @Mezbaan 2020</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
