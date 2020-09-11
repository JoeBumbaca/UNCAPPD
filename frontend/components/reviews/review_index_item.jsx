import React from 'react';
import StarCounter from './star_count';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let review = this.props.review
    if (review.photoUrl === "") {
      review.photoUrl = window.images.genericReview
    }
    return (
      <div>
        <br />
        <li className='review-inner-main'>
          <div className='indv-review-header'>
            <div className='indv-review-name'>
              {review.user[review.reviewer_id].username}
            </div>
            <div> is drinking a </div>
            <div className='indv-review-beer'>
              {review.beer[review.beer_id].name}
            </div>
            <div className='indv-review-brewery'>
              by
            </div>
            <div className='indv-review-beer'>
              {review.beer[review.beer_id].brewery}
            </div>
          </div>
          <br />
          <div className='indv-review-bottom'>
            <div className='indv-review-body'>{review.body}</div>
            <div className='stars'>
              <StarCounter count={review.rating} />
            </div>
            <div className='pic-div'>
              <img className='beer-review-pic' src={review.photoUrl} />
            </div>
          </div>
          <br />
        </li>
      </div>
    );}
}

export default ReviewIndexItem;

