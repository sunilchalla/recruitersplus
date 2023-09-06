import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { all } from "redux-saga/effects";
import recruiterSaga from "./actions/recruiter.saga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

function* rootSaga() {
  yield all([recruiterSaga()]);
}
sagaMiddleware.run(rootSaga);
