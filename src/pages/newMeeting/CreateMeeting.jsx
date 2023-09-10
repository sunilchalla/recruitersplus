import React from "react";
import CandidateDetailsCard from "../../components/ScheduleInterview/CandidateDetailsCard";
import JobDetailsCard from "../../components/ScheduleInterview/JobDetailsCard";
import AdditionalDetailsCard from "../../components/ScheduleInterview/AdditionalDetailsCard";
import { setHistory } from "../../utilities/historyHandler";
import { useDispatch } from "react-redux";

const CreateMeeting = () => {
  const dispatch = useDispatch()
  const handleOnSchedule = () => {
    dispatch({ type: "CREATE_MEETING" });
    // setHistory("/dashboard");
  };

  const handleDraftSave = () => {
    setHistory("/dashboard");
  };
  return (
    <div>
      <div className="row py-3">
        <div className="text-center">
        <h5 className="primary-color mb-0"> Schedule an Interview</h5>
        <small>Choose the date for a Perfect Call</small>
        </div>
        
      </div>
      <div className="row interview-container mx-auto">
        <div className="col-12 card my-2">
          <CandidateDetailsCard />
        </div>
        <div className="col-12 card my-2">
          <JobDetailsCard />
        </div>
        <div className="col-12 card my-2">
          <AdditionalDetailsCard />
        </div>
      </div>
      <div className="row pb-5">
<div className="col-md-4 offset-md-4 text-center">
<button className="rp-primary" onClick={() => handleOnSchedule()}>Schedule</button>
        <button className="rp-secondary" onClick={() => handleDraftSave()}>Save as A Draft</button>
</div>
        
      </div>
    </div>
  );
};

export default CreateMeeting;
