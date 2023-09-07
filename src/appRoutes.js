import React from "react";
import createMeeting from "./pages/newMeeting/createMeeting";
import JobDescription from "./pages/jobDescriptions/JobDescription";
import PaneList from "./pages/panelist/PaneList";
const Login = React.lazy(() => import("./pages/login/Login"));
const Registration = React.lazy(() =>
  import("./pages/registration/Registration")
);
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));

const appRoutes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/newmeeting",
    name: "Schedule Meeting",
    component: createMeeting,
  },
  {
    path: "/jobdescriptions",
    name: "Job Descriptions",
    component: JobDescription,
  },
  {
    path: "/panelist",
    name: "Panelist",
    component: PaneList,
  },
];
export default appRoutes;
