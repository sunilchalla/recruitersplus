// import { toast } from 'react-toastify';

const actionTypes = Object.freeze({
  SET_JOBS_DETAILS: "SET_JOBS_DETAILS",
  UPDATE_JOBS_DETAILS: "UPDATE_JOBS_DETAILS",
  CLEAR_JOBS_DETAILS: "CLEAR_JOBS_DETAILS",
});

export default function jobsReducer(
  state = [
    {
      jobId: "JOBD-6",
      jobName: "TEST-1",
      jobDescription:
        "<p>something about the job<br><strong>KEY RESPONSIBILITES:</strong></p><ul><li>responsibility-1</li><li>responsibility-2</li><li>responsibility-3</li></ul>",

      jobLocation: "Hyd",
      jobType: "ui_developer",
      jobStatus: "open",
      jobStartDate: "2023-09-25",
      jobEndDate: "2023-10-02",
      positions: 5,
      vendorId: "PULSA-29",
      vendorName: "PULSA Corp",
    },
    {
      jobId: "JOBD-7",
      jobName: "TEST-2",
      jobDescription:
        "<p>something about the job<br><strong>KEY RESPONSIBILITES:</strong></p><ul><li>responsibility-1</li><li>responsibility-2</li><li>responsibility-3</li></ul>",

      jobLocation: "Hyd",
      jobType: "ui_developer",
      jobStatus: "open",
      jobStartDate: "2023-09-25",
      jobEndDate: "2023-10-02",
      positions: 5,
      vendorId: "PULSA-29",
      vendorName: "PULSA Corp",
    },
    {
      jobId: "JOBD-8",
      jobName: "TEST-4",
      jobDescription:
        "<p>something about the job<br><strong>KEY RESPONSIBILITES:</strong></p><ul><li>responsibility-1</li><li>responsibility-2</li><li>responsibility-3</li></ul>",
      jobLocation: "BZA",
      jobType: "ui_developer",
      jobStatus: "open",
      jobStartDate: "2023-09-20",
      jobEndDate: "2023-10-02",
      positions: 2,
      vendorId: "PULSA-29",
      vendorName: "PULSA Corp",
    },
  ],
  action
) {
  switch (action.type) {
    case actionTypes.SET_JOBS_DETAILS:
      return [...action.payload];
    case actionTypes.UPDATE_JOBS_DETAILS:
      return [...state, ...action.payload];

    case actionTypes.CLEAR_JOBS_DETAILS:
      return [];

    default:
      return state;
  }
}

function setJobsDetails(payload) {
  // sets jobs, replacing existing
  return { type: actionTypes.SET_JOBS_DETAILS, payload };
}

function updateJobsDetails(payload) {
  // adds {key: value} pair(s) to existing jobs object
  return { type: actionTypes.UPDATE_JOBS_DETAILS, payload };
}

function clearJobsDetails(payload) {
  // removes all properties in jobs, returns empty object
  return { type: actionTypes.CLEAR_JOBS_DETAILS, payload };
}

export const jobsActions = {
  setJobsDetails,
  updateJobsDetails,
  clearJobsDetails,
};
