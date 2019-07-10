import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import beersReducer from './beers_reducer';
import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  beers: beersReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;