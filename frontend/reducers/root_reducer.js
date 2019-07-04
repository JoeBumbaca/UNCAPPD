import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import sessionErrorsReducer from "./errors_reducer";

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: sessionErrorsReducer
});

export default rootReducer;