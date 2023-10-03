import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import recruiterRepository from "../../api/recruiterRepository";
import { setHistory } from "../../utilities/historyHandler";
import { recruiterActions } from "../reducers/recruiterReducer";
// import { setHistory } from "utility/historyHandler";

const options = {
  messages: {
    OnSave: "Saving the User Preferences...",
    successOnSave: "User Preferences Saved Successfully",
    errorOnSave: "Unable to Save User Preferences",
  },
};
export const recruiterSagaTypes = Object.freeze({
  ATTEMPT_LOGIN: "ATTEMPT_LOGIN",
  CHECK_PERSISTED_USER: "CHECK_PERSISTED_USER",
  LOGOUT_USER: "LOGOUT_USER",
  SAVE_USER: "SAVE_USER",
  RECRUITER_REGISTRATION: "RECRUITER_REGISTRATION",
});

function* attemptLogin(action) {
  // Call Api and if successful validation of credentials, store user information in user reducer and sessionStorage
  try {
    toast.info("Validating User.....");

    const response = yield call(() =>
      recruiterRepository.validateUser(action.payload)
    );
    if (response) {
      console.log("login-response", response);
      sessionStorage.setItem("user", JSON.stringify(response));
      yield put(
        recruiterActions.setUser(response)
      );
      setHistory("/dashboard");
    }
  } catch (e) {}
}

function* checkPersistedUser(action) {
  //Look in session storage for previously authenticated user object
  const prevUser = yield window.sessionStorage.user;
  const parsedPrevUser = prevUser ? JSON.parse(prevUser) : null;
  if (parsedPrevUser) {
    // Put user object in Redux store if available
    yield put(recruiterActions.setUser(parsedPrevUser));
  }
}

function* logoutUser(action) {
  const sessionStorage = window.sessionStorage;
  sessionStorage.clear();
    yield put(recruiterActions.clearUser())
}

function* recruiterRegistration(action) {
  console.log(action);
  setHistory("/login");
  // Call Api and if successful validation of credentials, store user information in user reducer and sessionStorage
  try {
    toast.info("creating user");

    const response = true;
    // yield call(() =>
    //   recruiterRepository.userRegistration(action.payload)
    // );
    // Handle errors
    if (response?.status === "error") {
      return toast.error("unable to create user. Please try again.");
    } else {
      toast.success("User created Successfully");
    }
  } catch (e) {
    toast.error("An error occurred, please try again.");
  }
}

function* recruiterSaga() {
  yield takeLatest(recruiterSagaTypes.ATTEMPT_LOGIN, attemptLogin);
  yield takeLatest(recruiterSagaTypes.CHECK_PERSISTED_USER, checkPersistedUser);
  yield takeLatest(recruiterSagaTypes.LOGOUT_USER, logoutUser);
  yield takeLatest(
    recruiterSagaTypes.RECRUITER_REGISTRATION,
    recruiterRegistration
  );
}

export default recruiterSaga;
