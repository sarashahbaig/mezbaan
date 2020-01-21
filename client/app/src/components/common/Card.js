import React from "react";

class Card extends React.Component {
  render() {
    const { background, children } = this.props;
    return (
      <div className={`card mb-3 ${background}`}>
        <div className="card-body">{children}</div>
        
      </div>
      
    );
  }
}

export default Card;
