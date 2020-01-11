import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="container-fluid bg-dark text-white p-4">
        <div className="row">
          <div className="col">
            <h6>About</h6>
            <h6>Contant</h6>
          </div>
          <div className="col">
            <h6>Terms of Use</h6>
            <h6>FAQ</h6>
          </div>

          <div className="col">
            <h6>Blogs</h6>
            <h6>Help</h6>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">Copyright @Mezbaan 2020</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
