import React from "react";
import InterviewStatusCard from "../../components/InterviewStatusCard";
import GridExternalFilters from "../../components/GridExternalFilters";
import DataGrid from "../../components/DataGrid";
import { setHistory } from "../../utilities/historyHandler";

const Dashboard = () => {
  const interviewStatus = [
    { title: "Upcomming", icon: "", count: 5 },
    { title: "In-Progress", icon: "", count: 4 },
    { title: "Await-feedback", icon: "", count: 2 },
    { title: "Completed", icon: "", count: 3 },
  ];

  const createMeetingHandler = () => {
    setHistory("/scheduleInterview")
  };

  const rescheduleHandler = () => {};

  const onFilterChangeHadler = (filterName,value) => {
    console.log(filterName,value);
  
  };

  return (
    <div>
      <div className="row">Welcome -User</div>
      <div className="row">
        {interviewStatus.map((i) => {
          return (
            <div className="col" key={i}>
              <InterviewStatusCard
                title={i.title}
                count={i.count}
                icon={i.icon}
              />
            </div>
          );
        })}
      </div>
      <div className="row">
        <GridExternalFilters
          createMeetingHandler={createMeetingHandler}
          rescheduleHandler={rescheduleHandler}
          onFilterChangeHadler={onFilterChangeHadler}
        />
      </div>
      <div className="row">
        <DataGrid />
      </div>
    </div>
  );
};

export default Dashboard;
