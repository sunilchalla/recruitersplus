import React from 'react'

const JobDetailsCard = ({interviewDetails,setInterviewDetails}) => {
  return (
    <div className='p-3'>
        <div className="row">
            <label>Choose Job Description</label>
            <select>
                {[1,2,3].map((i)=>{
                    return <option key={i}>{i}</option>
                })}
            </select>
        </div>
        <div className="row">
            <label>Job Description</label>
            <textarea></textarea>
        </div>
    </div>
  )
}

export default JobDetailsCard