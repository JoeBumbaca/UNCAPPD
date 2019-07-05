import merge from 'lodash/merge';

import { RECEIVE_BEERS, RECEIVE_BEER } from '../actions/beer_actions';

const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BEER:
      let newState = merge({}, state, {[action.beer.id]: action.beer});
      return newState;
    case RECEIVE_BEERS:
      return action.beers
    default:
      return state;
  }
};

export default beersReducer;