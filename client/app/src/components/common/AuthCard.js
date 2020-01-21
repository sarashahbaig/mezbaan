import React from "react";
import Card from "./Card";

class AuthCard extends React.Component {
  render() {
    const { children, title } = this.props;
    return (
      <section className="container">
        <div className="row justify-content-center">
          <div className="col col-10 col-sm-12 col-md-8 col-lg-5">
            <Card>
              <h3>{title}</h3>
              {children}
            </Card>
          </div>
        </div>
      </section>
    );
  }
}

export default AuthCard;
