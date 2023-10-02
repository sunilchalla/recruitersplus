import Fetch from "./Fetch";

async function validateUser(loginObj) {
  // loginObj = { email:'string', password:'string' }
  const response = await Fetch.post("/authenticate", loginObj);
  return response;
}

async function recruiterRegistration(registrationObj) {
//   resetObj = {email: 'string', verificationCode: 'string', newPassword: 'string}
  const response = await Fetch.post("/recruiter/registration", registrationObj);
  return response;
}


const recruiterRepository = {
  validateUser,
  recruiterRegistration,
};

export default recruiterRepository;
