import React, { useEffect, useState } from "react";
import JobDescriptionView from "../../components/JobDescription/JobDescriptionView";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
const JobDescription = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.JOBS_DETAILS);
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filterValue, setFilterValue] = useState("");
  const skillSet = [
    { value: "java", label: "Java" },
    { value: "angular", label: "Angular" },
    { value: "reactjs", label: "ReactJS" },
    { value: "aws", label: "AWS" },
    { value: "html", label: "HTML" },
    { value: "css", label: "CSS" },
    { value: "javascript", label: "JavaScript" },
    { value: "sql", label: "SQL" },
    { value: "ionic", label: "Ionic" },
    { value: "flutter", label: "Flutter" },
    { value: "python", label: "Python" },
  ];
  const jobStatus = [
    { label: "Open", value: "open", id: 1 },
    { label: "Upcoming", value: "upcoming", id: 2 },
    { label: "Closed", value: "close", id: 3 },
    { label: "Cancalled", value: "cancalled", id: 4 },
  ];
  const jobCategories = [
    {
      label: "UI Developer",
      value: "ui_developer",
      id: 1,
    },
    {
      label: "Java Developer",
      value: "java_developer",
      id: 2,
    },
  ];
  const [jobDetails, setJobDetails] = useState({});

  const [jobDetailsFormErrors, setJobDetailsFormErrors] = useState([]);
  const [activeJob, setActiveJob] = useState(filteredJobs[0] || {});

  const onJobChangeHandler = (key, value) => {
    setJobDetails((prev) => {
      return { ...prev, [key]: value };
    });
  };


  const validateJobDetailsForm = () => {
    return true;
  };
  const submitJobDetails = () => {
    if (validateJobDetailsForm) {
      dispatch({ type: "CREATE_NEW_JOB_DETAILS", payload: jobDetails });
    }
  };

  useEffect(() => {
    dispatch({ type: "GET_ALL_JOB_DETAILS" });
  }, []);

  const filterJobs = (data) => {
    if(data.length>0){
       const tempJobs = [...jobs].filter((i) => i?.skills?.includes(data));
       setFilterValue(data);
       setFilteredJobs(tempJobs);
       setActiveJob(tempJobs[0]);
    }
  };

  const renderFirstDescElement = (data) => { 
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = data;
    const newData = tempDiv?.firstChild.innerText;
    return newData
   }
  return (
    <div>
      <div className="row py-3">
        <div className="col-3">
          <div className="card p-2">
            <div className="row">
              <div className="col-md-8">
                <select
                  name=""
                  id=""
                  className="p-2 jd-changes"
                  value={filterValue}
                  contains
                  // onChange={(e) => filterJobs(e.target.value)}
                  style={{ border: "none", fontWeight: "600" }}
                >
                  <option value="">All Job Descriptions</option>
                  <option value="angular">Angular</option>
                  <option value="reactjs">ReactJs</option>
                </select>
              </div>
              <div className="col-md-4">
                <button
                  className="rp-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  {" "}
                  <FontAwesomeIcon icon={faPlus} /> Add
                </button>
              </div>
            </div>

            <hr />
            <div className="row px-3">
              {filteredJobs.map((job) => {
                return (
                  <div
                    key={job.jobId}
                    onClick={() => setActiveJob(job)}
                    className="cursor-pointer"
                  >
                    <div className="col-md-12 my-2 p-2 selected-card">
                      <p className="primary-color mb-1">{job?.jobName}</p>
                      <div>{renderFirstDescElement(job?.jobDescription)}</div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-9">
          {activeJob && <JobDescriptionView job={activeJob} />}
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 primary-color" id="exampleModalLabel">
                Post your Job Description
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="candidate_details">
                <div className="row">
                  <div className="col">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Name</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Job Name"
                          value={jobDetails?.jobName || ""}
                          onChange={(e) =>
                            onJobChangeHandler("jobName", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col ">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Category</label>
                      </div>
                      <div className="col-md-12">
                        <select
                          name=""
                          id=""
                          value={jobDetails?.jobType || ""}
                          onChange={(e) =>
                            onJobChangeHandler("jobType", e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          {jobCategories?.map((i) => {
                            return (
                              <option key={i.id} value={i.value}>
                                {i.label}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">No. Of Positions</label>
                      </div>
                      <div className="col-md-12">
                        <select
                          name=""
                          id=""
                          value={jobDetails?.positions || ""}
                          onChange={(e) =>
                            onJobChangeHandler("positions", e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Job Location</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="text"
                          value={jobDetails?.jobLocation || ""}
                          placeholder="Job Location"
                          onChange={(e) =>
                            onJobChangeHandler("jobLocation", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Job Status</label>
                      </div>
                      <div className="col-md-12">
                        <select
                          value={jobDetails?.jobStatus || ""}
                          onChange={(e) =>
                            onJobChangeHandler("jobStatus", e.target.value)
                          }
                        >
                          <option value={""}>Select</option>
                          {jobStatus.map((i) => {
                            return (
                              <option key={i.id} value={i.value}>
                                {i.label}
                              </option>
                            );
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
                        <input
                          type="date"
                          value={jobDetails?.jobStartDate}
                          onChange={(e) =>
                            onJobChangeHandler("jobStartDate", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">End Date</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          type="date"
                          value={jobDetails?.jobEndDate}
                          onChange={(e) =>
                            onJobChangeHandler("jobEndDate", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row pt-3">
                  <div className="col-md-12">
                    <label className="c-blue">Job Description</label>
                  </div>
                  <div className="col-md-12">
                    <CKEditor
                      editor={ClassicEditor}
                      data={jobDetails?.jobDescription || ""}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        // console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        onJobChangeHandler("jobDescription", data);
                        // console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        // console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        // console.log("Focus.", editor);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center p-3">
                <button
                  type="button"
                  class="rp-primary"
                  onClick={() => submitJobDetails()}
                >
                  Save
                </button>
                <button
                  type="button"
                  class="rp-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setJobDetails({})}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
