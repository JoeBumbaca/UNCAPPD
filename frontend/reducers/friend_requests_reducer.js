import { RECEIVE_FRIEND_REQUEST, REMOVE_FRIEND_REQUEST } from '../actions/friend_request_actions';

const friendRequestsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_FRIEND_REQUEST:
      const nextState = Object.assign({}, state);
      nextState[action.request.id] = action.request;
      return nextState;
    default:
      return state
  }
}

export default friendRequestsReducer;