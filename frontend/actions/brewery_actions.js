import * as BreweryAPIUtil from '../util/brewery_api_util';

// Action Constants
export const RECEIVE_ALL_BREWERIES = 'RECEIVE_ALL_BREWERIES';
export const RECVEIVE_BREWERY = 'RECEIVE_BREWERY';

//Action Creators
export const receiveAllBreweries = (breweries) => {
  return {
    type: RECEIVE_ALL_BREWERIES,
    breweries
  };
};

export const receiveBrewery = (brewery) => {
  return {
    type: RECVEIVE_BREWERY,
    brewery
  };
};

// Thunk Action Creators
export const fetchAllBreweries = () => (dispatch) => {
  return BreweryAPIUtil.fetchAllBreweries()
    .then(breweries => dispatch(receiveAllBreweries(breweries)));
};

export const fetchBrewery = (id) => (dispatch) => {
  return BreweryAPIUtil.fetchSingleBrewery(id)
    .then(brewery => dispatch(receiveBrewery(brewery)));
};

