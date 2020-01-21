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
    description: "I Can help you prepare for your driver license exam."
  },
  {
    img: fillingform,
    title: "Filling Forms",
    description: "I Can help with Filling any Forms."
  },
  {
    img: law,
    title: "Legal Advice",
    description:
      "I Can help with any Legal advice or to find a right person or place to go to."
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
            const { title, img, description } = feature;
            return (
              <div className="col-4 h-100 d-flex" key={title}>
                <PhotoCard
                  background="bg-light"
                  image={img}
                  title={title}
                  centerAlign={true}
                  description={description}
                ></PhotoCard>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Features;
