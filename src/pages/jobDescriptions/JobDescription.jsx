import React, { useState } from 'react'
import JobDescriptionView from '../../components/JobDescription/JobDescriptionView';
import { faPlus, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const JobDescription = () => {
  const animatedComponents = makeAnimated();

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
  const skillSet = [
    { value: 'java', label: 'Java' },
    { value: 'angular', label: 'Angular' },
    { value: 'reactjs', label: 'ReactJS' },
    { value: 'aws', label: 'AWS' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'sql', label: 'SQL' },
    { value: 'ionic', label: 'Ionic' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'python', label: 'Python' },
  ]
  
  const [activeJobDescription, setActiveJobDescription] = useState("");
  return (
    <div>
      <div className="row py-3">
        <div className="col-3">
          <div className="card p-2">
            <div className="row">
              <div className="col-md-8">
                <select name="" id="" className='p-2 jd-changes' style={{ border: 'none', fontWeight: '600' }}>
                  <option value="all">All Job Descriptions</option>
                  <option value="angular">Angular</option>
                  <option value="react">ReactJs</option>
                </select>
              </div>
              <div className="col-md-4">
                <button className='rp-primary' data-bs-toggle="modal" data-bs-target="#exampleModal"> <FontAwesomeIcon icon={faPlus} /> Add</button>
              </div>
            </div>

            <hr />
            <div className='row px-3'>
              <div className="col-md-12 my-2 p-2 selected-card">
                <p className='primary-color mb-1'>Job Description 1</p>
                <span>Work as a member of a team specializing in design, build and test of responsive user interfaces, SPAs & websites....</span>
              </div>
              <hr />
              <div className="col-md-12 my-2 p-2">
                <p className='primary-color mb-1'>Job Description 2</p>
                <span>Work as a member of a team specializing in design, build and test of responsive user interfaces, SPAs & websites....</span>
              </div>
              <hr />
              <div className="col-md-12 my-2 p-2">
                <p className='primary-color mb-1'>Job Description 3</p>
                <span>Work as a member of a team specializing in design, build and test of responsive user interfaces, SPAs & websites....</span>
              </div>
            </div>
          </div>

        </div>
        <div className="col-9">
          <JobDescriptionView />
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 primary-color" id="exampleModalLabel">Post your Job Description</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div className='candidate_details'>
                <div className="row">
                  <div className="col">
                    <div className='row'>
                      <div className='col-md-12'>
                        <label className='c-blue'>Name</label>
                      </div>
                      <div className='col-md-12'>
                        <input
                          placeholder="Enter The Candidate Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="row">
                      <div className="col-md-12">
                        <label className='c-blue'>Category</label>
                      </div>
                      <div className="col-md-12">
                        <select name="" id="">
                          <option value="uideveloper">UI Developer</option>
                          <option value="javadeveloper">Java Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className='c-blue'>No. Of Positions</label>
                      </div>
                      <div className="col-md-12">
                        <select name="" id="">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className='c-blue'>Job Location</label>
                      </div>
                      <div className="col-md-12">
                        <input type="text" placeholder='Job Location' />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className='c-blue'>Job Status</label>
                      </div>
                      <div className="col-md-12">
                        <select>
                          {["Job Status", "Open", "Upcoming", "Closed", "Cancalled"].map((i) => {
                            return <option key={i}>{i}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Start Date</label>
                      </div>
                      <div className="col-md-12">
                        <input type="date" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">End Date</label>
                      </div>
                      <div className="col-md-12">
                        <input type="date" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row pt-3">
                  <div className='col-md-12'>
                    <label className='c-blue'>Job Description</label>
                  </div>
                  <div className="col-md-12">
                    <textarea></textarea>
                  </div>
                </div>
                <div className='row pt-3'>
                    <div className='col-md-12'>
                        <label className='c-blue'>Skills</label>
                    </div>
                    <div className='col-md-12'>
                    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[skillSet[4], skillSet[5]]}
      isMulti
      options={skillSet}
    />
                    </div>
                </div>
              </div>
              <div className='text-center p-3'>
                <button type="button" class="rp-primary">Save</button>
                <button type="button" class="rp-secondary" data-bs-dismiss="modal">Close</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDescription