import { connect } from 'react-redux';
import ReviewIndex from './review_index'

import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = state => {
  let reviewsArr = Object.values(state.entities.reviews)
  return {
    reviews: reviewsArr
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviews: () => dispatch(fetchReviews())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex)