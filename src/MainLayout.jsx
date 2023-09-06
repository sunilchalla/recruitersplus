import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import appRoutes from "./appRoutes";
import Navbar from "./components/Navbar";
import { initHistory } from "./utilities/historyHandler";

const MainLayout = (children) => {
    const history = useNavigate();
    initHistory(history);
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="row">
        <Routes>
          <Route path="/login" element={<Navigate to="/dashboard" />} />
          {appRoutes?.map((eachRoute) => {
            return (
              <Route path={eachRoute.path} element={<eachRoute.component />} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
