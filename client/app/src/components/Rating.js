import React from "react";
import Star from "./Star";
// import StarRatings from './react-star-ratings';

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userRating: 0,
      ratingArr: []
    };
  }

  componentDidMount() {
    this.caculateRating();
  }

  caculateRating = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const ratings = this.props.ratings.map(item => item.rating);
    const totalRatings = ratings.reduce(reducer, 0);
    console.log(ratings, totalRatings);
    const ar = new Array(totalRatings);
    this.setState({ userRating: totalRatings, ratingArr: ar });
  };

  render() {
    const { userRating, ratingArr } = this.state;
    const { ratings } = this.props;

    return (
      <div>
        Rating:{" "}
        <div className="d-flex">
          {ratingArr.map(item => (
            <Star />
          ))}
        </div>
      </div>
    );
  }
}

export default Rating;
