// import { toast } from 'react-toastify';

const actionTypes = Object.freeze({
  SET_PANELIST: "SET_PANELIST",
  UPDATE_PANELIST: "UPDATE_PANELIST",
  CLEAR_PANELIST: "CLEAR_PANELIST",
});

export default function panelistReducer(state = [], action) {
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
