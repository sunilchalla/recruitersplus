import React from 'react'

const PreviewMeeting = () => {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <h3> Meeting Id</h3>
          </div>
          <div className="row">
            Job Details
          </div>
          <div className="row">
            Hiring Progress
          </div>
          <div className="row">
            Interview Details
          </div>
          <div className="row">
            Job Description
          </div>
        </div>
        <div className="col-3">
          <div className="col">Issue Details</div>
          <div className="col">Attachments</div>
          <div className="col">Interview Notes</div>
        </div>
      </div>
    </div>
  );
}

export default PreviewMeeting