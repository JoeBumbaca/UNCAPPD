import { connect } from 'react-redux';
import {createReview } from '../../actions/review_actions';
import CreateReviewForm from './create_review_form';
import { fetchBeer } from '../../actions/beer_actions';

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.beerId;
  let beer;
  if (!state.entities.beers) {
    beer = null;
  } else {
    beer = state.entities.beers[id];
  }
  return {
    beer: beer,
    reviewer: state.entities.users[state.session.currentUser]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createReview: review => dispatch(createReview(review)),
    fetchBeer: id => dispatch(fetchBeer(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm);