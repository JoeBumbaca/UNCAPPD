import merge from 'lodash/merge';

import { RECEIVE_BEERS, RECEIVE_BEER, REMOVE_BEER } from '../actions/beer_actions';
import { RECEIVE_REVIEWS } from '../actions/review_actions';
import { RECVEIVE_BREWERY } from '../actions/brewery_actions';

const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECVEIVE_BREWERY:
      newState = {};
      Object.values(action.payload.beers).forEach(beer => {
        newState[beer.id] = beer
      })
      return newState;
    case RECEIVE_BEER:
      newState = merge({}, state, {[action.beer.id]: action.beer});
      return newState;
    case RECEIVE_BEERS:
      return action.beers;
    case REMOVE_BEER:
      newState = merge({}, state);
      delete newState[action.beer.id];
      return newState;
    default:
      return state;
  }
};

export default beersReducer;