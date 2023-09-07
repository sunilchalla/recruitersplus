import React from 'react'

const CandidateDetailsCard = ({interviewDetails,setInterviewDetails}) => {
  return (
    <div>
      <div className="row">
        <h2>Candidate Details</h2>
      </div>
      <div className="row">
        <div className="col">
          <label>Name</label>
          <input placeholder="Enter The Candidate Name" />
        </div>
        <div className="col">
          <label>Mobile</label>
          <input placeholder="Enter The Candidate Number" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Primary Mail ID</label>
          <input placeholder="Enter The Email Address" />
        </div>
        <div className="col">
          <label>Secondary Mail ID</label>
          <input placeholder="Enter The Email Address" />
        </div>
      </div>
    </div>
  );
}

export default CandidateDetailsCard