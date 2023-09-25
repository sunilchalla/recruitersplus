import React, { useEffect, useState } from "react";
import { faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import makeAnimated from "react-select/animated";
import PaneListaAll from "./PaneListsAll";
import Select from "react-select";
import { useDispatch } from "react-redux";
const PaneList = ({
  onFilterChangeHadler,
  filtersSelectedValues,
  createMeetingHandler,
  rescheduleHandler,
}) => {
  const animatedComponents = makeAnimated();
  const [panelist, setPanelist] = useState({ category: "RECRUITER" });
  const dispatch = useDispatch();
  const statusList = [
    { name: "Status - 1" },
    { name: "Status - 2" },
    { name: "Status - 3" },
    { name: "Status - 4" },
  ];
  const panelistName = [
    { name: "PaneListName-1" },
    { name: "PaneListName-2" },
    { name: "PaneListName-3" },
    { name: "PaneListName-4" },
    { name: "PaneListName-5" },
  ];
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

  const getSkillsValues = (list) => {
    const newSkills = list?.map((i) => {
      let temp = skillSet.find((j) => j.value === i);
      return temp;
    });
    return newSkills;
  };

  const onPanelistChangeHandler = (key, value) => {
    setPanelist((prev) => {
      return { ...prev, [key]: value };
    });
  };

  

  return (
    <div className="container-fluid">
      <div className="py-3">
        <h2 className="primary-color">Panelists</h2>
        <p>Track & Assign your Expert Panelists for Interviews </p>
      </div>

      <div className="row">
        <div className="row">
          <div className="col-3">
            <input placeholder="Search" className="w-100" />
          </div>
          <div className="col-7 offset-2 text-right">
            <select className="filter-select">
              {panelistName.map((i) => {
                return <option>{i.name}</option>;
              })}
            </select>
            <select className="filter-select">
              {statusList.map((i) => {
                return <option>{i.name}</option>;
              })}
            </select>
            <button
              className="rp-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              {" "}
              <FontAwesomeIcon icon={faPlus} /> Add Panelist
            </button>
          </div>
          <div>
            <div className="py-3">
              <PaneListaAll />
            </div>
          </div>
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
                Add Panelist
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
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">First Name</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Candidate Name"
                          value={panelist?.firstName || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler("firstName", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Last Name</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Candidate Name"
                          value={panelist?.lastName || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler("lastName", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Display Name</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Candidate Name"
                          value={panelist?.displayName || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler(
                              "displayName",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Mobile Number</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Candidate Number"
                          value={panelist?.phone || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler("phone", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Email ID</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Email Address"
                          value={panelist?.email || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler("email", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Experience</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Candidate Name"
                          value={panelist?.experience || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler(
                              "experience",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Designation</label>
                      </div>
                      <div className="col-md-12">
                        <select
                          name=""
                          id=""
                          value={panelist?.designation || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler(
                              "designation",
                              e.target.value
                            )
                          }
                        >
                          <option value="uideveloper">UI Developer</option>
                          <option value="javadeveloper">Java Developer</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Organizarion </label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Candidate Name"
                          value={panelist?.organization || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler(
                              "organization",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Organization Mail</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Candidate Name"
                          value={panelist?.organizationEmail || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler(
                              "organizationEmail",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Location </label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The location"
                          value={panelist?.location || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler("location", e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6  pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Timezone</label>
                      </div>
                      <div className="col-md-12">
                        <select
                          value={panelist?.timezone || ""}
                          onChange={(e) =>
                            onPanelistChangeHandler("timezone", e.target.value)
                          }
                        >
                          {["Select Your Timezone", 1, 2, 3, 4].map((i) => {
                            return <option key={i}>{i}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className="c-blue">Skills</label>
                      </div>
                      <div className="col-md-11">
                        <Select
                          closeMenuOnSelect={false}
                          value={getSkillsValues(panelist?.skills) || []}
                          onChange={(e) => {
                            const tempSkills = [...e].map((i) => i.value);
                            onPanelistChangeHandler("skills", tempSkills);
                          }}
                          components={animatedComponents}
                          // defaultValue={[skillSet[4], skillSet[5]]}
                          isMulti={true}
                          options={skillSet}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center p-3">
                <button type="button" class="rp-primary">
                  Add Panelist
                </button>
                <button
                  type="button"
                  class="rp-secondary"
                  data-bs-dismiss="modal"
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

export default PaneList;
