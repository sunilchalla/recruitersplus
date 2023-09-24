import { combineReducers } from "redux";
import recruiterReducer from "./recruiterReducer";
import bookingReducer from "./bookingReducer";
import jobsReducer from "./jobsReducer";
import panelistReducer from "./panelistReducer";

const rootReducer = combineReducers({
  RECRUITER: recruiterReducer,
  BOOKING: bookingReducer,
  JOBS_DETAILS: jobsReducer,
  PANELIST: panelistReducer,
});

export default rootReducer;
