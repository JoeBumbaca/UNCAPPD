import * as APIUtil from '../util/beer_api_util';

export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_BEER = "REMOVE_BEER";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

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

const removeBeer = beer => ({
  type: REMOVE_BEER,
  beer
})

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const createBeer = formBeer => dispatch => (
  APIUtil.create(formBeer)
  .then( beer => dispatch(receiveBeer(beer)),
  err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchBeer = id => dispatch => (
  APIUtil.fetchBeer(id)
  .then( beer => dispatch(receiveBeer(beer)))
);

export const fetchBeers = () => dispatch => (
  APIUtil.fetchBeers()
  .then(beers => dispatch(receiveBeers(beers)))
);

export const updateBeer = (beer) => dispatch => (
  APIUtil.updateBeer(beer)
  .then( beer => dispatch(receiveBeer(beer)),
  err => (dispatch(receiveErrors(err.responseJSON))
  ))
);

export const deleteBeer = (beer) => dispatch => (
  APIUtil.deleteBeer(beer)
  .then( beer => dispatch(removeBeer(beer)))
)