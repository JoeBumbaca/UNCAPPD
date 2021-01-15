import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserReviews } from '../../actions/review_actions';
import { fetchUser } from '../../actions/session_actions';
import { createFriendRequest } from '../../actions/friend_request_actions';


const MSP = (state, ownProps) => {
  let user;
  if (state.entities.users[ownProps.match.params.userId]) {
    user = state.entities.users[ownProps.match.params.userId]
  } else {
    user = null;
  }
  return {
    currentUserId: state.session.currentUser,
    user: user,
    userId: ownProps.match.params.userId,
    reviews: Object.values(state.entities.reviews)
  }
};

const MDP = dispatch => {
  return {
    fetchUserReviews: (id) => dispatch(fetchUserReviews(id)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    createFriendRequest: (request) => dispatch(createFriendRequest(request))
  }
};

export default connect(MSP, MDP)(UserProfile);
