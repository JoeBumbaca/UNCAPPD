import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullSession = {
  currentUser: null
};

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser.id };
    default:
      return state;
  }
};

export default sessionReducer;