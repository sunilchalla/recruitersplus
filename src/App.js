import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageLoading from "./components/PageLoading";
import Login from "./pages/login/Login";
import { Registration } from "./pages/registration/Registration";
import MainLayout from "./MainLayout";

function App() {
  // will update with actual user logged context
  const isLoggedin = true;
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
