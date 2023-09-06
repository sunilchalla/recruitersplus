import React from "react";
import InterviewStatusCard from "../../components/InterviewStatusCard";
import GridExternalFilters from "../../components/GridExternalFilters";
import DataGrid from "../../components/DataGrid";
import { setHistory } from "../../utilities/historyHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardUser, faFileLines, faUserCheck, faUserTie, faUsers } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const interviewStatus = [
    {
      title: "Upcomming",
      icon: <FontAwesomeIcon icon={faChalkboardUser} />,
      count: 5,
    },
    {
      title: "In-Progress",
      icon: <FontAwesomeIcon icon={faUserTie} />,
      count: 4,
    },
    {
      title: "Await-feedback",
      icon: <FontAwesomeIcon icon={faUserCheck} />,
      count: 2,
    },
    { title: "Completed", icon: <FontAwesomeIcon icon={faUsers} />, count: 3 },
  ];

  const createMeetingHandler = () => {
    setHistory("/scheduleInterview")
  };

  const rescheduleHandler = () => {};

  const onFilterChangeHadler = (filterName,value) => {
    console.log(filterName,value);
  
  };

  return (
    <div className="container-fluid">
      <div className="py-3">
        <h2 className="primary-color">Welcome -User</h2>
        <p>Let's keep it with the Schedule</p>
      </div>
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
      <div className="row pt-5">
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
