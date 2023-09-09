import React from "react";

const AdditionalDetailsCard = ({ interviewDetails, setInterviewDetails }) => {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <label>Category</label>
          <select>
            {["Select Your Category", 1, 2, 3, 4].map((i) => {
              return <option key={i}>{i}</option>;
            })}
          </select>
        </div>
        <div className="col-4">
          <label>Experience</label>
          <input type="text" placeholder="Enter Your Experience" />
        </div>
        <div className="col-4">
          <label>Position</label>
          <input type="text" placeholder="Enter Position" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <label>Panelist</label>
          <select>
            {["Select Your Panelist", 1, 2, 3, 4].map((i) => {
              return <option key={i}>{i}</option>;
            })}
          </select>
        </div>
        <div className="col-4">
          <label>Date & Time</label>
          <input type="datetime-local" placeholder="Enter Your Experience" />
        </div>
        <div className="col-4">
          <label>Timezone</label>
          <select>
            {["Select Your Timezone", 1, 2, 3, 4].map((i) => {
              return <option key={i}>{i}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="row">
        <label>Upload Documents</label>
        <input type="file" />
      </div>
    </div>
  );
};

export default AdditionalDetailsCard;
