import React from "react";
import Card from "../common/Card";
import landingpage from "../../images/landingpage.jpg";
import law from "../../images/law.jpg";
import learndriving from "../../images/learndriving.png";
import fillingform from "../../images/fillingform.jpg";
import { Link } from "react-router-dom";
import { HOME } from "../../constants";
import PhotoCard from "../common/PhotoCard";

const FEATURES = [
  {
    img: learndriving,
    title: "Learn Driving",
    buttonText: "Learn More"
  },
  {
    img: fillingform,
    title: "Filling Forms",
    buttonText: "Learn More"
  },
  {
    img: law,
    title: "Legal Advice",
    buttonText: "Learn More"
  }
];
class Features extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <h2 className="text-center text-secondary font-weight-light">
          Get Help With
        </h2>

        <div className="card-columns row">
          {FEATURES.map(feature => {
            const { title, img, buttonText } = feature;
            return (
              <div className="col-4 h-100 d-flex">
                <PhotoCard
                  background="bg-light"
                  image={img}
                  title={title}
                  centerAlign={true}
                >
                  <Link
                    className="text-center btn btn-primary"
                    to={`${HOME.link}`}
                  >
                    {buttonText}
                  </Link>
                </PhotoCard>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Features;
