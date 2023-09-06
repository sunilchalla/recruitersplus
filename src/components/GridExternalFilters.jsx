import React from 'react'

const GridExternalFilters = ({onFilterChangeHadler,filtersSelectedValues,createMeetingHandler,rescheduleHandler}) => {
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

    const onChangeHandler = (filterName,value) => { 
        onFilterChangeHadler(filterName,value)
     }
  return (
    <div className="row">
      <div className="col-2">
        <input placeholder="Search" />
      </div>
      <div className="col-8 offset-2">
        <select>
          {statusList.map((i) => {
            return <option>{i.name}</option>;
          })}
        </select>
        <select>
          {statusList.map((i) => {
            return <option>{i.name}</option>;
          })}
        </select>
        <select>
          {statusList.map((i) => {
            return <option>{i.name}</option>;
          })}
        </select>
        <button className='primary' onClick={()=>createMeetingHandler()}> Create Meeting</button>
        <button className='primary' onClick={()=>rescheduleHandler()}> Reschedule</button>
      </div>
    </div>
  );
}

export default GridExternalFilters