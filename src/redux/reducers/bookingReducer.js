// import { toast } from 'react-toastify';

const actionTypes = Object.freeze({
  SET_BOOKING: "SET_BOOKING",
  UPDATE_BOOKING: "UPDATE_BOOKING",
  CLEAR_BOOKING: "CLEAR_BOOKING",
});

export default function bookingReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.SET_BOOKING: // LOGIN
      return { ...action.payload };

    case actionTypes.UPDATE_BOOKING:
      return { ...state, ...action.payload };

    case actionTypes.CLEAR_BOOKING: // LOGOUT
      // toast.success('Logged out successfully')
      return null;

    default:
      return state;
  }
}

function setBooking(payload) {
  // sets booking, replacing existing
  return { type: actionTypes.SET_BOOKING, payload };
}

function updateBooking(payload) {
  // adds {key: value} pair(s) to existing booking object
  return { type: actionTypes.UPDATE_BOOKING, payload };
}

function clearBooking(payload) {
  // removes all properties in booking, returns empty object
  return { type: actionTypes.CLEAR_BOOKING, payload };
}

export const bookingActions = {
  setBooking,
  updateBooking,
  clearBooking,
};
