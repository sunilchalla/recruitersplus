import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CandidateDetailsCard = ({setInterviewDetails}) => {
  const interviewDetails = useSelector(state=>state.BOOKING)
  const dispatch = useDispatch()

  const handleCandidateChanges = (key,value) => { 
    dispatch({ type: "UPDATE_BOOKING", payload: { [key]: value } });

   }

  return (
    <div>
      <div className="row">
        <h2>Candidate Details</h2>
      </div>
      <div className="row">
        <div className="col">
          <label>Name</label>
          <input
            placeholder="Enter The Candidate Name"
            value={interviewDetails?.candiateName || ""}
            onChange={(e) =>
              handleCandidateChanges("candiateName", e.target.value)
            }
          />
        </div>
        <div className="col">
          <label>Mobile</label>
          <input
            placeholder="Enter The Candidate Number"
            value={interviewDetails?.candidatePhone || ""}
            onChange={(e) =>
              handleCandidateChanges("candidatePhone", e.target.value)
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Primary Mail ID</label>
          <input
            placeholder="Enter The Email Address"
            value={interviewDetails?.candidateEmail || ""}
            onChange={(e) =>
              handleCandidateChanges("candidateEmail", e.target.value)
            }
          />
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