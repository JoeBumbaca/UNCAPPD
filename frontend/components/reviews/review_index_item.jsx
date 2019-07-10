import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    let review = this.props.review
    return (
      <li>
        <div>{ review.beer[review.beer_id].name }</div>
        <div>{ review.user[review.reviewer_id].username }</div>
        <div>{ review.rating }</div>
        <div>{ review.body }</div>
        <br />
      </li>
    )}
}

export default ReviewIndexItem;