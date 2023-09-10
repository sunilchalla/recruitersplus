import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClipboardList
} from "@fortawesome/free-solid-svg-icons";
const JobDetailsCard = ({ interviewDetails, setInterviewDetails }) => {
    return (
        <div className='p-3 candidate_details'>
            <div className="row">
                <h5> <FontAwesomeIcon className='c-blue' icon={faClipboardList} /> Job Details</h5>
                <div className='col-md-6'>
                    <label className='c-blue'>Name</label> <br />
                    <select className=''>
                        {[1, 2, 3].map((i) => {
                            return <option key={i}>{i}</option>
                        })}
                    </select>
                </div>
            </div>
            <div className="row pt-2">
                <div className='col-md-12'>
                    <label className='c-blue'>Job Description</label>
                </div>
                <div className="col-md-12">
                    <textarea></textarea>
                </div>
            </div>
        </div>
    )
}

export default JobDetailsCard