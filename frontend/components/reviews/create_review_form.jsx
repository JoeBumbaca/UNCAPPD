import React from 'react';
import { Link } from 'react-router-dom';
import NavContainer from '../nav/nav_container';

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beer: this.props.beer,
      body: '',
      rating: '3'
    }

    this.setSliderValue = this.setSliderValue.bind(this);

    this.handleReview = this.handleReview.bind(this);
  };
  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId)
      .then( () => this.setState({
        beer: this.props.beer
      }));
    window.scrollTo(0,0);
  }

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

  setSliderValue(e) {
    this.setState({
      rating: e.currentTarget.value
    });
  }

  updateBody(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  handleReview(e) {
    e.preventDefault();
    const review = Object.assign({}, 
      {
        body: this.state.body,
        rating: this.state.rating,
        beer_id: this.props.beer.id,
        reviewer_id: this.props.reviewer.id
    })
    this.props.createReview(review)
      .then( () => this.props.history.push('/reviews/index'));
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
        <textarea rows="8" cols="50" className="review" placeholder="What did you think?" value={this.state.body} onChange={this.updateBody('body')}></textarea>
        <div className="review-rating">
          <div className="review-label">
              Rating: {this.state.rating}
          </div>
          <input type='range' list='review-score'
          min='1'
          max='5'
          step='1'
          value={this.state.rating}
          onChange={this.setSliderValue}
          />
            <datalist id="review-score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </datalist>
        </div>
        <button className="review-submit" onClick={this.handleReview}>Post Review</button>
        </div>
       </div>
     </div>
  )
}





}

export default CreateReviewForm;




