import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav/nav_container';

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);


  };


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


render() {
  return (
     <div>
       <NavContainer /> 
       <div className="review-main">
        <div className="review-form-main">
        <div className="create-review-title">Write a Review</div>
          {/* {this.renderErrors()} */}
        <div className="review-body"></div>
        <textarea rows="8" cols="50" className="review" placeholder="What did you think?"></textarea>
        <div className="review-rating">
          <div className="review-label">
          Rating
          </div>
          <form>
            <input name="rating" className="review" type="radio" value="1" /> 1 
            <input name="rating" className="review" type="radio" value="2" /> 2 
            <input name="rating" className="review" type="radio" value="3" /> 3 
            <input name="rating" className="review" type="radio" value="4" /> 4 
            <input name="rating" className="review" type="radio" value="5" /> 5 
          </form>
        </div>
        <button className="review-submit">Post Review</button>
        </div>
       </div>
     </div>
  )
}





}

export default CreateReviewForm;




