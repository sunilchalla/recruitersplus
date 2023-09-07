import React from "react";
import CandidateDetailsCard from "../../components/ScheduleInterview/CandidateDetailsCard";
import JobDetailsCard from "../../components/ScheduleInterview/JobDetailsCard";
import AdditionalDetailsCard from "../../components/ScheduleInterview/AdditionalDetailsCard";
import { setHistory } from "../../utilities/historyHandler";

const CreateMeeting = () => {
  const handleOnSchedule = () => {
    setHistory("/dashboard");
  };

  const handleDraftSave = () => {
    setHistory("/dashboard");
  };
  return (
    <div>
      <div className="row">
        <h1> Schedule an Interview</h1>
        <p>Choose the date for a Perfect Call</p>
      </div>
      <div className="row">
        <div className="col-12">
          <CandidateDetailsCard />
        </div>
        <div className="col-12">
          <JobDetailsCard />
        </div>
        <div className="col-12">
          <AdditionalDetailsCard />
        </div>
      </div>
      <div className="row">
        <button onClick={() => handleOnSchedule()}>Schedule</button>
        <button onClick={() => handleDraftSave()}>Save as A Draft</button>
      </div>
    </div>
  );
};

export default CreateMeeting;
