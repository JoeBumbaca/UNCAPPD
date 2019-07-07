import * as APIUtil from '../util/beer_api_util';

export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

const receiveBeers = beers => ({
  type: RECEIVE_BEERS,
  beers
});

const receiveBeer = beer => ({
  type: RECEIVE_BEER,
  beer
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const createBeer = formBeer => dispatch => (
  APIUtil.create(formBeer)
  .then( beer => dispatch(receiveBeer(beer)))
);

export const fetchBeer = id => dispatch => (
  APIUtil.fetchBeer(id)
  .then( beer => dispatch(receiveBeer(beer)))
);

export const fetchBeers = () => dispatch => (
  APIUtil.fetchBeers()
  .then(beers => dispatch(receiveBeers(beers)))
);