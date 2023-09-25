import React, { useEffect } from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
const PaneListaAll = () => {
  const dispatch = useDispatch();
  const panelists = useSelector((state) => state.PANELIST);
  useEffect(() => {
    dispatch({ type: "GET_ALL_PANELIST" });
  }, []);

  return (
    <div>
      <div className="row py-3">
        {panelists?.map((panelist)=>{
            return (
              <div className="col-md-3" key={panelist.userId}>
                <div className="card br-2">
                  <div className="row p-3">
                    <div className="col-md-7">
                      <h4>{`${panelist.firstName} ${panelist?.lastName}`}</h4>
                      <p className="text-muted">Sr. UI UX Developer</p>
                    </div>
                    <div className="col-md-5 text-right">
                      <span
                        className={`${
                          panelist?.active ? "status-online" : "status-offline"
                        }`}
                      >
                        <FontAwesomeIcon
                          icon={faCircle}
                          className="pad-right-5"
                        />
                        Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default PaneListaAll;
