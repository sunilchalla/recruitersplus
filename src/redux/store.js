import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import recruiterSaga from "./actions/recruiter.saga";
import rootReducer from "./reducers/rootReducer";
import bookingsSaga from "./actions/booking.saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield all([recruiterSaga(),bookingsSaga()]);
}
sagaMiddleware.run(rootSaga);
