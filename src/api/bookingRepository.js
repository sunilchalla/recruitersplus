import Fetch from "./Fetch";

async function createNewBooking(bookingObject) {
  const response = await Fetch.post("/booking/services", bookingObject);
  return response;
}

const bookingRepository = {
    createNewBooking
};

export default bookingRepository;
