import React from 'react'

const InterviewStatusCard = ({title,count,icon}) => {
  return (
    <div className="status-card">
      <div className="card s-cards">
        <div className="">{title}</div>
        <div className="row ">
          <div className="col-md-6 count_block">
            <div className="">{count}</div>
          </div>
          <div className="col-md-6 icon_block">{icon}</div>
        </div>
      </div>
    </div>
  );
}

export default InterviewStatusCard