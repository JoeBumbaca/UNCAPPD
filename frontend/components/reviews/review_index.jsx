import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav/nav_container';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }



  componentDidMount() {
    this.props.fetchReviews()
  };

  render () {
    const reviews = this.props.reviews.map(review => {
      return (
        <ReviewIndexItem
        key={review.id}
        review={review}
        history={history}
        />
      )
    })

    return (
      <div>
        <NavContainer />
        <div className="review-outer-main"> 
          <div className="reviews-index-title">Reviews</div>
          <ul className="review-innner-outer">
          { reviews }
          </ul>
        </div>
      </div>
    );

  }
};

export default ReviewIndex;