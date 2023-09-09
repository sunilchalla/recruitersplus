import { call, put, select, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";
import { setHistory } from "../../utilities/historyHandler";
import bookingRepository from "../../api/bookingRepository";

export const recruiterSagaTypes = Object.freeze({
  ATTEMPT_LOGIN: "ATTEMPT_LOGIN",
  CHECK_PERSISTED_USER: "CHECK_PERSISTED_USER",
  LOGOUT_USER: "LOGOUT_USER",
  SAVE_USER: "SAVE_USER",
  CREATE_MEETING: "CREATE_MEETING",
});
function* createMeeting(action) {
    const booking = yield select((store) => store.BOOKING);
    let newBooking = {
      ...booking,
      recruiterName: "Ramarao",
      recruiterEmail: "bulusu.ramanand@gmail.com",
      vendorId: "PULSA-23",
      meeingInfo: {
        title: "Interview Meeting",
        password: "secure123",
        type: "VIDEO",
        name: "Alice's Interview",
        description: "Interview for a position full",
        startTime: "2023-08-22T09:00:00Z",
        endTime: "2023-08-22T10:00:00Z",
        timeZone: "UTC",
        status: "CREATED",
        participants: [{ name: "rama", email: "rama@thoughtblends.com" }],
      },
      meetingType: "GOOGLE_MEET",
    };
    console.log(booking)
  // Call Api and if successful validation of credentials, store user information in user reducer and sessionStorage
  try {
    toast.info("Creating new Meeting");

    const response = true;
    // yield call(() =>
    //   bookingRepository.createNewBooking(action.payload)
    // );
    // Handle errors
    if (response?.status === "error") {
      return toast.error("unable to create meeting. Please try again.");
    } else {
      toast.success("User created Successfully");
    }
  } catch (e) {
    toast.error("An error occurred, please try again.");
  }
}

function* bookingsSaga() {
  yield takeLatest(recruiterSagaTypes.CREATE_MEETING, createMeeting);
}

export default bookingsSaga;
