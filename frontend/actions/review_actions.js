import * as APIUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";


const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
});

const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS,
});

export const fetchReviews = () => dispatch => (
  APIUtil.fetchReviews()
  .then( reviews => dispatch(receiveReviews(reviews)))
);

export const fetchReview = id => dispatch => (
  APIUtil.fetchReview(id)
  .then( review => dispatch(receiveReview(review)))
);

export const createReview = formReview => dispatch => (
  APIUtil.create(formReview)
  .then( review => dispatch(receiveReview(review)))
);