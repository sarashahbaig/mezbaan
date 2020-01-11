import React from "react";
import Card from "../common/Card";
import landingpage from "../../images/landingpage.jpg";

class Features extends React.Component {
  render() {
    return (
      <section>
        <Card>
          {/* <p className="auto" style={{width:"400px"}}> */}
          <p className="text-center">
            There are many different ways that individuals with all kinds of
            experience can help. Examples include volunteering in
          </p>
          <ul className="text-center">
            <ul>
              <li> Teaching English as a second language.</li>
              <li> Filling out forms.</li>
              <li> Finding a right place to live in.</li>
              <li>
                Helping to find school for kids and <mark> many more </mark>.
              </li>
            </ul>
          </ul>
          <p className="text-center">
            It's important to spend time exploring your options and which
            opportunities are the best fit based on your interests, skills, and
            the time you have available to volunteer.
          </p>
        </Card>
        <img src={landingpage} className="img-fluid" alt="togtherimg" />

        <Card>
          <p className="text-center">
            This is the place were we invite worldwide people to provide
            assistance and support by giving some time from there busy life to
            the Immigrants who needs help for <mark> free </mark>.
          </p>
        </Card>
      </section>
    );
  }
}

export default Features;
