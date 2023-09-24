import Fetch from "./Fetch";

async function getAllPanelists(vendorName) {
  const response = await Fetch.get(`/panel/services/all?vendor=${vendorName}`);
  return response;
}

async function createPanelist(jobDetailsObj) {
  const response = await Fetch.post("/panel/services", jobDetailsObj);
  return response;
}

const panelistRepository = {
  getAllPanelists,
  createPanelist,
};

export default panelistRepository;
