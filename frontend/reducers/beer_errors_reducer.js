import merge from 'lodash/merge';

import { RECEIVE_BEER, RECEIVE_ERRORS, REMOVE_ERRORS } from '../actions/beer_actions';

const beerErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BEER:
      return [];
    case RECEIVE_ERRORS:
      return action.errors
    case REMOVE_ERRORS:
      return [];
    default:
      return state;
  }
};

export default beerErrorsReducer;