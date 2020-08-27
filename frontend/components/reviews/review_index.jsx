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
    window.scrollTo(0, 0);
  };

  render () {
    const reviews = this.props.reviews.reverse().map(review => {
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
          <ul className="review-innner-outer">
            <div className='reviews-header'>Recent Global Activity</div>
            { reviews }
          </ul>
        </div>
      </div>
    );

  }
};

export default ReviewIndex;