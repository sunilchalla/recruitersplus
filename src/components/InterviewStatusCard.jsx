import React from 'react'

const InterviewStatusCard = ({title,count,icon}) => {
  return (
    <div>
        <div className="">
            {title}
        </div>
        <div className="">
            {count}
        </div>
        <div className="icon">{icon}</div>
    </div>
  )
}

export default InterviewStatusCard