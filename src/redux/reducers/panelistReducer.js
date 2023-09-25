// import { toast } from 'react-toastify';

const actionTypes = Object.freeze({
  SET_PANELIST: "SET_PANELIST",
  UPDATE_PANELIST: "UPDATE_PANELIST",
  CLEAR_PANELIST: "CLEAR_PANELIST",
});

export default function panelistReducer(
  state = [
    {
      userId: "RECR-1",
      firstName: "Chandbasha",
      lastName: "Shaik",
      displayName: "Chand",
      email: "shaikchandbasha@gmail.com",
      phone: "+917386053148",
      experience: null,
      designation: "Senior Recruiter",
      organization: "PULSAR Corp",
      organizationEmail: null,
      location: "Hyd",
      category: "RECRUITER",
      submitterId: "RECR-1",
      vendorId: "PULSA-29",
      skills: [],
      token: "UQhDLTpeSz",
      password: null,
      role: "ADMIN",
      active: false,
      subscribedVendors: [],
    },
    {
      userId: "PANE-8",
      firstName: "Pavan",
      lastName: "A",
      displayName: "Pavan001",
      email: "pavan.a@gmail.com",
      phone: "998776655",
      experience: "5",
      designation: "UI Developer",
      organization: "SB",
      organizationEmail: "pavan.a@scriptbees.com",
      location: "HYD",
      category: "INTERVIEWER",
      submitterId: "RECR-1",
      vendorId: "PULSA-29",
      skills: ["figma", "adobe XD", "adobe Photoshop"],
      token: "lvrdDMmfwu",
      password: null,
      role: "USER",
      active: false,
      subscribedVendors: [],
    },
  ],
  action
) {
  switch (action.type) {
    case actionTypes.SET_PANELIST:
      return [...action.payload];
    case actionTypes.UPDATE_PANELIST:
      return [...state, ...action.payload];

    case actionTypes.CLEAR_PANELIST:
      return [];

    default:
      return state;
  }
}

function setPanelist(payload) {
  // sets panelist, replacing existing
  return { type: actionTypes.SET_PANELIST, payload };
}

function updatePanelist(payload) {
  // adds {key: value} pair(s) to existing panelist object
  return { type: actionTypes.UPDATE_PANELIST, payload };
}

function clearPanelist(payload) {
  // removes all properties in panelist, returns empty object
  return { type: actionTypes.CLEAR_PANELIST, payload };
}

export const panelistActions = {
  setPanelist,
  updatePanelist,
  clearPanelist,
};
