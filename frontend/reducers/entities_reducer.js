import { combineReducers } from "redux";
import usersReducer from './users_reducer';
import beersReducer from './beers_reducer';
import reviewsReducer from './reviews_reducer';
import breweriesReducer from "./breweries_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  breweries: breweriesReducer,
  beers: beersReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;