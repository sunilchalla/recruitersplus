import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { setHistory } from "../../utilities/historyHandler";
import { jobsActions } from "../reducers/jobsReducer";
import panelistRepository from "../../api/panelistRepository";
import { panelistActions } from "../reducers/panelistReducer";

export const panelistSagaTypes = Object.freeze({
  CREATE_NEW_PANELIST: "CREATE_NEW_PANELIST",
  GET_ALL_PANELIST: "GET_ALL_PANELIST",
});

function* createPanelist(action) {
  const user = yield select((store) => store.RECRUITER);
  toast.info("Creating new panelist");
  debugger
  try {
    const response = yield call(() =>
      panelistRepository.createPanelist({
        ...action.payload,
        vendorId: user.vendorId,
        submitterId: user.userId,
        userId: user.userId,
      })
    );
    if (response?.status === "error") {
      return toast.error("unable to create panelist. Please try again.");
    } else {
      yield call(getAllPanelist);
      toast.success("Panelist created Successfully");
    }
  } catch (e) {
    toast.error("An error occurred, please try again.");
  }
}

function* getAllPanelist(action) {
  const user = yield select((store) => store.USER);
  try {
    const response = yield call(() =>
      panelistRepository.getAllPanelists(user.vendorName)
    );
    if (response) {
      yield put(panelistActions.setPanelist(response.data));
    }
  } catch (e) {
    toast.error("An error occurred, please try again.");
  }
}

function* panelistSaga() {
  yield takeEvery(panelistSagaTypes.CREATE_NEW_PANELIST, createPanelist);
  yield takeEvery(panelistSagaTypes.GET_ALL_PANELIST, getAllPanelist);
}

export default panelistSaga;
