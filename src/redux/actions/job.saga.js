import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { setHistory } from "../../utilities/historyHandler";
import jobRepository from "../../api/jobRepository";
import { jobsActions } from "../reducers/jobsReducer";

export const recruiterSagaTypes = Object.freeze({
  CREATE_NEW_JOB_DETAILS: "CREATE_NEW_JOB_DETAILS",
  GET_ALL_JOB_DETAILS: "GET_ALL_JOB_DETAILS",
});

function* createJobDetails(action) {
   const user = yield select((store) => store.RECRUITER);
  try {
    toast.info("Creating new Meeting");
    const response = yield call(() =>
      jobRepository.createJobDetails({...action.payload,vendorId:user.vendorId})
    );
    if (response?.status === "error") {
      return toast.error("unable to create job details. Please try again.");
    } else {
      yield call(getAllJobDetails);
      toast.success("Job Details created Successfully");
    }
  } catch (e) {
    toast.error("An error occurred, please try again.");
  }
}

function* getAllJobDetails(action) {
  const user = yield select((store) => store.RECRUITER);
  try {
    const response = yield call(() =>
      jobRepository.getAllJobDetails(user.vendorId)
    );
    if (response) {
      yield put(jobsActions.setJobsDetails(response.data));
    }
  } catch (e) {
    toast.error("An error occurred, please try again.");
  }
}

function* jobSaga() {
  yield takeEvery(recruiterSagaTypes.CREATE_NEW_JOB_DETAILS, createJobDetails);
  yield takeEvery(recruiterSagaTypes.GET_ALL_JOB_DETAILS, getAllJobDetails);
}

export default jobSaga;
