import { call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import recruiterRepository from "../../api/recruiterRepository";
import { setHistory } from "../../utilities/historyHandler";
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
  RECRUITER_REGISTRATION:"RECRUITER_REGISTRATION"
});

function* attemptLogin(action) {
  // Call Api and if successful validation of credentials, store user information in user reducer and sessionStorage
  try {
    // const loginSecret = yield call(() => generalRepository.GetConfiguration('loginSecret'));
    // if (loginSecret === null || loginSecret === undefined) {
    //   return; // login will fail
    // }
    // toast.info('Validating login credentials')
    // const userEmail = action.payload.email
    // const userPw = action.payload.password; // keep a copy of the unencrypted password in case user needs to change it (see below)
    // const loginObj = { email: userEmail, password: CryptoJS.AES.encrypt(userPw, loginSecret).toString() };
    // // Api call
    // const response = yield call(() => recruiterRepository.validateUser(loginObj))
    // // Handle errors
    // if (response.status === 'error') {
    //   return toast.error('Invalid login credentials. Please try again.')
    // };
    // // If New Password Required
    // if (response.reason && response.reason === 'newPasswordRequired') {
    //   // Saga middleware can change routes when provided history object
    //   // Send user to NewPassword creation page
    //   toast('You are required to create a new password to continue.')
    //   return setHistory('/newpw', { userEmail, oldPassword: userPw });
    // }
    // // Successful validation of user credentials
    // const user = response;
    // yield put(userActions.setUser(user)) // store user object in Redux
    // // Persist validated user in sessionStorage
    // const sessionStorage = window.sessionStorage
    // sessionStorage.setItem('user', JSON.stringify(user))
    // toast.success(`Welcome, ${user.firstName}`)
    // setHistory('/');
    // if (user?.currentAssessmentProgram) { // once the user successfully logged in, trigger metadata redux store action with current assessment program
    //   yield put({
    //     type: metadataSagaTypes.FETCH_METADATA,
    //     payload: user?.currentAssessmentProgram,
    //   });
    //   yield put({
    //     type: appConfigSagaTypes.FETCH_APP_CONFIG,
    //     payload: user?.currentAssessmentProgram,
    //   });
    // }
    // yield put({ type: configSagaTypes.FETCH_CONFIG });
  } catch (e) {
    // toast.error('An error occurred, please try again.')
  }
}

function* checkPersistedUser(action) {
  // Look in session storage for previously authenticated user object
  //   const prevUser = yield window.sessionStorage.user;
  //   const parsedPrevUser = prevUser ? JSON.parse(prevUser) : null
  //   if (parsedPrevUser) {
  //     // Put user object in Redux store if available
  //     yield put(userActions.setUser(parsedPrevUser))
  //   }
}

function* logoutUser(action) {
  const sessionStorage = window.sessionStorage;
  sessionStorage.clear();
  //   yield put(userActions.clearUser())
}

function* saveUserPreference(action) {
  try {
    // const { user, newValues } = action.payload;
    // toast.info(options.messages.OnSave);
    // const response = yield call(() => recruiterRepository.saveUserPreference({ ...user, ...newValues }));
    // if (response.status === 'error') {
    //   return toast.error(response.message.errorOnSave);
    // }
    // yield put(userActions.updateUser({ ...newValues }));
    // toast.success(options.messages.successOnSave);
    // // Persist new user preference changes in sessionStorage, after the store updated
    // const sessionStorage = window.sessionStorage
    // sessionStorage.setItem('user', JSON.stringify({ ...user, ...newValues }));
  } catch (e) {
    // toast.error(options.messages.errorOnSave);
  }
}

function* recruiterRegistration(action) {
  console.log(action)
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
  yield takeLatest(recruiterSagaTypes.SAVE_USER, saveUserPreference);
  yield takeLatest(recruiterSagaTypes.RECRUITER_REGISTRATION,recruiterRegistration)
}

export default recruiterSaga;
