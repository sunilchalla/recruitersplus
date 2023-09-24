import React from 'react'

const JobDescriptionView = ({ job }) => {
  return (
    <div className="card p-3">
      <div className="row">
        <div className="col-12">
          <h4 className="c-blue"> {job?.jobName}</h4>
          <p>{job?.jobDescription}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <p className="text-muted mb-1">Created By</p>
          <p>{job?.vendorName}</p>
        </div>
        <div className="col-md-3">
          <p className="text-muted mb-1">Created Date</p>
          <p>{job?.jobStartDate}</p>
        </div>
        <div className="col-md-3">
          <p className="text-muted mb-1">Description Category</p>
          <p>{job?.jobType}</p>
        </div>
        <div className="col-md-3">
          <p className="text-muted mb-1">No. of Positions</p>
          <p>{job?.positions}</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-9">
          <h5 className="c-blue">Description</h5>
        </div>
        <div className="col-md-3 text-right">1 day ago</div>
        <div className="col-md-12">
          <p>
            Work as a member of a team specializing in design, build and test of
            responsive user interfaces, SPAs & websites using Angular framework.
            Develop high quality and scalable enterprise applications with
            Angular using modern front-end engineering practices.
          </p>
          <h5>KEY RESPONSIBILITIES</h5>
          <ul>
            <li>
              Should have executed 1 or 2 micro services architecture based
              product.
            </li>
            <li>
              A quick learner and a great coder. Should be able to code from end
              to end of a feature..
            </li>
            <li>Must be a go getter, self-motivated engineer to the core.</li>
            <li>Should carry out requirement gathering and ETA assessment.</li>
            <li>Work with team to groom and create stories.</li>
            <li>Lead architectural decisions and its implementations.</li>
            <li>
              Interact with cross functional team driving features
              independently.
            </li>
            <li>Must be able to bring in innovation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default JobDescriptionView