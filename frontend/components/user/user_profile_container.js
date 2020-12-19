import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserReviews } from '../../actions/review_actions';
import { fetchUser } from '../../actions/session_actions';


const MSP = (state, ownProps) => {
  let user;
  if (state.entities.users[ownProps.match.params.userId]) {
    user = state.entities.users[ownProps.match.params.userId]
  } else {
    user = null;
  }
  return {
    user: user,
    userId: ownProps.match.params.userId,
    reviews: Object.values(state.entities.reviews)
  }
};

const MDP = dispatch => {
  return {
    fetchUserReviews: (id) => dispatch(fetchUserReviews(id)),
    fetchUser: (userId) => dispatch(fetchUser(userId))
  }
};

export default connect(MSP, MDP)(UserProfile);
