import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AllUsers from "./AllUsers";
const MyTeam = () => {

    return (
        <>
            <div>
                <div className="row">
                    <AllUsers />
                </div>
            </div>
        </>

    );
};

export default MyTeam;
