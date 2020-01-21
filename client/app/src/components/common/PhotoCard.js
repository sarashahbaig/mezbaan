import React from "react";

class PhotoCard extends React.Component {
  render() {
    const {
      background,
      children,
      image,
      title,
      description,
      centerAlign
    } = this.props;
    return (
      <div className="card h-100 border-0 border-round-0 flex-fill">
        <img src={image} className="card-img-top img-responsive" alt="..." />
        <div
          className={`card-body ${centerAlign && "text-center"} ${background}`}
        >
          <h5 className="card-title"> {title}</h5>
          <p className="card-text"> {description}</p>
          {children}
        </div>
      </div>
    );
  }
}

export default PhotoCard;
