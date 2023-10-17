import "./App.css";
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import PageLoading from "./components/PageLoading";
import Login from "./pages/login/Login";
import { Registration } from "./pages/registration/Registration";
import MainLayout from "./MainLayout";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useDispatch, useSelector } from "react-redux";
import { initHistory } from "./utilities/historyHandler";

function App() {
  // will update with actual user logged context
  const isLoggedin = useSelector((store) => store?.RECRUITER?.vendorId);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "CHECK_PERSISTED_USER" });
  }, [])
  
  return (
    <div className="">
      <BrowserRouter>
        <Suspense fallback={<PageLoading />}>
          {!isLoggedin ? (
            <Routes>
              <Route path="/*" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          ) : (
            <MainLayout/>
          )}
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
