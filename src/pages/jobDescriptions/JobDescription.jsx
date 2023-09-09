import React, { useState } from 'react'
import JobDescriptionView from '../../components/JobDescription/JobDescriptionView';

const JobDescription = () => {

  const jobDescriptionsList = [
    {
      jobId: "1",
      jobName: "Job - 1",
      jobDescription: "Job Description",
      jobLocation: "Hyderbad",
      jobType: "Developer",
      jobStatus: "open",
      jobStartDate: "10-10-2023",
      jobEndDate: "10-12-2023",
      positions: 0,
      vendorId: "1",
      vendorName: "Vendor-1",
    },
  ];
  const [activeJobDescription, setActiveJobDescription] = useState("");
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div className="">
            All Job Descriptions
          </div>
        </div>
        <div className="col-9">
          <JobDescriptionView/>
        </div>
      </div>
    </div>
  )
}

export default JobDescription