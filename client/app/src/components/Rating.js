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

    // console.log(ratings, sumOfRatings);

    const totalUsersRated = this.props.ratings.length;
    const sumofMaxRatingOfUserCount = totalUsersRated * 5;
    const sumOfRatings = ratings.reduce(reducer, 0);
    const rating = (sumOfRatings * 5) / sumofMaxRatingOfUserCount;

    //     total users rated: 6
    // sum_of_max_rating_of_user_count: 6 x 5 = 30
    // sum_of_rating: 25

    // rating = (25 * 5) / 30

    const ar = Array.from({ length: rating }).fill(0);
    this.setState({ userRating: sumOfRatings, ratingArr: ar });
  };

  render() {
    const { userRating, ratingArr } = this.state;
    const { ratings } = this.props;

    return (
      <div>
        <div className="d-flex">
          Rating:&nbsp;
          {ratingArr.map(item => (
            <Star key={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default Rating;
