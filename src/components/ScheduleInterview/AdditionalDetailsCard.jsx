import React from "react";
import { faCloudUploadAlt, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uploadIcon from "../../assets/upload.png"

const AdditionalDetailsCard = ({ interviewDetails, setInterviewDetails }) => {
  return (
    <div className="p-3 candidate_details">
      <div className="row">
        <h5>  <FontAwesomeIcon className='c-blue' icon={faListAlt} /> Additional Details</h5>
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Category</label>
            </div>
            <div className="col-md-12">
              <select>
                {["Select Your Category", 1, 2, 3, 4].map((i) => {
                  return <option key={i}>{i}</option>;
                })}
              </select>
            </div>
          </div>


        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Experience</label>
            </div>
            <div className="col-md-12">
              <input type="text" placeholder="Enter Your Experience" />
            </div>
          </div>


        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Position</label>
            </div>
            <div className="col-md-12">
              <input type="text" placeholder="Enter Position" />
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-2">
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Panelist</label>
            </div>
            <div className="col-md-12">
              <select>
                {["Select Your Panelist", 1, 2, 3, 4].map((i) => {
                  return <option key={i}>{i}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Panelist Mail Id</label>
            </div>
            <div className="col-md-12">
            <input type="text" placeholder="Fill Panelist Mail" />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Timezone</label>
            </div>
            <div className="col-md-12">
              <select>
                {["Select Your Timezone", 1, 2, 3, 4].map((i) => {
                  return <option key={i}>{i}</option>;
                })}
              </select>
            </div>
          </div>


        </div>
        </div>
        <div className="row pt-2">
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Meeting Type</label>
            </div>
            <div className="col-md-12">
              <select>
                {["Select Your Panelist", "Zoom","Teams", "Skype", "Hackerrank"].map((i) => {
                  return <option key={i}>{i}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Meeting Password</label>
            </div>
            <div className="col-md-12">
              <input type="text" placeholder="Enter Password" />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Date & Time</label>
            </div>
            <div className="col-md-12">
              <input type="datetime-local" placeholder="Enter Your Experience" />
            </div>
          </div>

        </div>
        </div>
     <div className="row pt-2">
     <div className="col-4">
          <div className="row">
            <div className="col-md-12">
              <label className="c-blue">Candidate Locatioin</label>
            </div>
            <div className="col-md-12">
              <input type="text" placeholder="Enter location" />
            </div>
          </div>
        </div>
     </div>
        
       
   
      <div className="row pt-2">
        <div className="col-md-12">
          <label className="c-blue">Upload Documents</label>
        </div>
        <div className="col-md-12">
          <div className="file_upload">
            <label for="fileInput" className="c-blue">
            <FontAwesomeIcon style={{fontSize: '30px'}} icon={faCloudUploadAlt} /> Upload Files
            </label>
            <input id="fileInput" type="file"></input>
          </div>
        </div>

      </div>
      <div className="row">
      <div className="col-md-12">
          <label className="c-blue">Add Comments</label>
        </div>
        <div className="col-md-12">
          <textarea className="w-100" name="addcomments" id="comments" cols="30" rows="4"></textarea>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetailsCard;
