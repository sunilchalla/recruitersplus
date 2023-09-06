import { combineReducers } from "redux";
import recruiterReducer from "./recruiterReducer";

const rootReducer = combineReducers({
  RECRUITER: recruiterReducer,
});

export default rootReducer;
