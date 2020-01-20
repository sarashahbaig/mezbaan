import React from "react";
import english from "../../images/english.jpg";
import PhotoCard from "../common/PhotoCard";
import buycar from "../../images/buycar.jpg";
import jobs from "../../images/jobs.jpg";

const SERVICES = [
  {
    title: "Finding a Car",
    image: buycar,
    description: " I Can help you find a car or a place best to go."
  },
  {
    title: "Finding a Tutoring",
    image: english,
    description:
      "I can help tutor for middle school math including arithmetic, geometry and algebra."
  },
  {
    title: "Finding Jobs",
    image: jobs,
    description: "I can help finding and applying jobs online."
  }
];

class Services extends React.Component {
  render() {
    return (
      <div className="mb-3">
        <h2 className="text-center text-secondary font-weight-light">
          Our Services
        </h2>

        <div className="card-columns row">
          {SERVICES.map(service => {
            const { title, image, description, buttonText } = service;
            return (
              <div className="col-4 h-100 d-flex" key={title}>
                <PhotoCard
                  background="bg-light"
                  title={title}
                  image={image}
                  description={description}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Services;
