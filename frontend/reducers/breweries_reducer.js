import { RECEIVE_ALL_BREWERIES, RECEIVE_BREWERY, RECVEIVE_BREWERY } from '../actions/brewery_actions';

const breweriesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type) {
    case RECVEIVE_BREWERY:
      nextState = {[action.brewery.id]: action.brewery};
      return nextState;
    case RECEIVE_ALL_BREWERIES:
      nextState = action.breweries;
      return nextState;
    default:
      return state;
  }
}

export default breweriesReducer;