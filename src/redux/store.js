import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import recruiterSaga from "./actions/recruiter.saga";
import rootReducer from "./reducers/rootReducer";
import bookingsSaga from "./actions/booking.saga";
import jobSaga from "./actions/job.saga";
import panelistSaga from "./actions/panelist.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield all([recruiterSaga(),bookingsSaga(),jobSaga(),panelistSaga()]);
}
sagaMiddleware.run(rootSaga);
