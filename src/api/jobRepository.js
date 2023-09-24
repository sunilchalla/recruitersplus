import Fetch from "./Fetch";

async function getAllJobDetails(vendorName) {
  const response = await Fetch.get(`/jd/services/all?name=${vendorName}`);
  return response;
}

async function createJobDetails(jobDetailsObj) {
  const response = await Fetch.post("/jd/services", jobDetailsObj);
  return response;
}

const jobRepository = {
  getAllJobDetails,
  createJobDetails,
};

export default jobRepository;
