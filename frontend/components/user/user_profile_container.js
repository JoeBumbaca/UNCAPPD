import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserReviews } from '../../actions/review_actions';


const MSP = (state) => {
  return {
    currentUser: state.entities.users[state.session.currentUser],
    reviews: Object.values(state.entities.reviews)
  }
};

const MDP = dispatch => {
  return {
    fetchUserReviews: (id) => dispatch(fetchUserReviews(id))
  }
};

export default connect(MSP, MDP)(UserProfile);
