import { combineReducers } from "redux";
import sessionErrorsReducer from './session_errors_reducer';
import beerErrorsReducer from './beer_errors_reducer';

const errorsReducer = combineReducers({
  sessionErrors: sessionErrorsReducer,
  beerErrors: beerErrorsReducer
});

export default errorsReducer;