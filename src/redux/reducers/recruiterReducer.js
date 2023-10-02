// import { toast } from 'react-toastify';

const actionTypes = Object.freeze({
  SET_USER: "SET_USER",
  UPDATE_USER: "UPDATE_USER",
  CLEAR_USER: "CLEAR_USER",
});

export default function recruiterReducer(
  state = {
},
  // {
  //   userId: "RECR-1",
  //   firstName: "Chandbasha",
  //   lastName: "Shaik",
  //   displayName: "Chand",
  //   email: "shaikchandbasha@gmail.com",
  //   phone: "+917386053148",
  //   organization: "PULSAR Corp",
  //   designation: "Senior Recruiter",
  //   location: "Hyd",
  //   category: "RECRUITER",
  //   role: "ADMIN",
  //   vendorId: "PULSA-29",
  //   vendorName: "PULSAR Corp",
  //   active: false,
  //   token: "UQhDLTpeSz",
  //   submitterId: "RECR-1",
  // },
  action
) {
  switch (action.type) {
    case actionTypes.SET_USER: // LOGIN
      return { ...action.payload };

    case actionTypes.UPDATE_USER:
      return { ...state, ...action.payload };

    case actionTypes.CLEAR_USER: // LOGOUT
      // toast.success('Logged out successfully')
      return null;

    default:
      return state;
  }
}

function setUser(payload) {
  // sets user, replacing existing
  return { type: actionTypes.SET_USER, payload };
}

function updateUser(payload) {
  // adds {key: value} pair(s) to existing user object
  return { type: actionTypes.UPDATE_USER, payload };
}

function clearUser(payload) {
  // removes all properties in user, returns empty object
  return { type: actionTypes.CLEAR_USER, payload };
}

export const recruiterActions = {
  setUser,
  updateUser,
  clearUser,
};
