import React from 'react'
import { faPlus, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PaneListaAll from './PaneListsAll';


const PaneList = ({ onFilterChangeHadler, filtersSelectedValues, createMeetingHandler, rescheduleHandler }) => {
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

  const onChangeHandler = (filterName, value) => {
    onFilterChangeHadler(filterName, value)
  }
  return (
    <div className="container-fluid">
      <div className="py-3">
        <h2 className="primary-color">Panelists</h2>
        <p>Track & Assign your Expert Panelists for Interviews  </p>
      </div>

      <div className="row">
        <div className="row">
          <div className="col-3">
            <input placeholder="Search" className='w-100' />
          </div>
          <div className="col-7 offset-2 text-right">

            <select className='filter-select'>
              {panelistName.map((i) => {
                return <option>{i.name}</option>;
              })}
            </select>
            <select className='filter-select'>
              {statusList.map((i) => {
                return <option>{i.name}</option>;
              })}
            </select>
            <button className='rp-primary' data-bs-toggle="modal" data-bs-target="#exampleModal"> <FontAwesomeIcon icon={faPlus} />  Add Panelist</button>

          </div>
          <div>
            <div className='py-3'>
              <PaneListaAll />
            </div>

          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 primary-color" id="exampleModalLabel">Add Panelist</h1>
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
                  <div className="col">
                    <div className='row'>
                      <div className="col-md-12">
                        <label className='c-blue'>Mobile Number</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Candidate Number"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col pt-3">
                    <div className="row">
                      <div className="col-md-12">
                        <label className='c-blue'>Email ID</label>
                      </div>
                      <div className="col-md-12">
                        <input
                          placeholder="Enter The Email Address"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col pt-3">
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
              </div>
              <div className='text-center p-3'>
              <button type="button" class="rp-primary">Add Panelist</button>
              <button type="button" class="rp-secondary" data-bs-dismiss="modal">Close</button>
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaneList