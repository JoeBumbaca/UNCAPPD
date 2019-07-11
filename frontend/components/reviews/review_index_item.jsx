import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    let review = this.props.review
    return (
      <div>
        <br />
        <li className="review-inner-main">
          <div className="indv-review-header">
          <div className="indv-review-name">{review.user[review.reviewer_id].username}</div>
          <div> is drinking a </div> 
          <div className="indv-review-beer">{review.beer[review.beer_id].name}</div>
          </div>
          <br/>
          <div className="indv-review-bottom">
            <div className="indv-review-body">{ review.body }</div>
            <div className="stars">
            <img className="review-stars"src={window.starImgURL} />
            <img className="review-stars"src={window.starImgURL} />
            </div>
          </div>
        <br />
      </li>
      </div>
    )}
}

export default ReviewIndexItem;

