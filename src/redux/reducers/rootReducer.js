import { combineReducers } from "redux";
import recruiterReducer from "./recruiterReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  RECRUITER: recruiterReducer,
  BOOKING: bookingReducer
});

export default rootReducer;
