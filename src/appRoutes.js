import React from "react";
const Login = React.lazy(() => import("./pages/login/Login"));
const Registration = React.lazy(() =>import("./pages/registration/Registration"));
const Dashboard = React.lazy(() => import("./pages/dashboard/Dashboard"));
const CreateMeeting = React.lazy(() =>import("./pages/newMeeting/CreateMeeting"));
const JobDescription = React.lazy(() =>import("./pages/jobDescriptions/JobDescription"));
const PaneList = React.lazy(() => import("./pages/panelist/PaneList"));
const PreviewMeeting = React.lazy(()=>import("./pages/previewMeeting/PreviewMeeting"))
const MyTeam = React.lazy(()=>import("./pages/myteam/MyTeam"))
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
    component: CreateMeeting,
  },
  {
    path: "/jobdescriptions",
    name: "Job Descriptions",
    component: JobDescription,
  },
  {
    path: "/myteam",
    name: "My Team",
    component: MyTeam,
  },
  {
    path: "/panelist",
    name: "Panelist",
    component: PaneList,
  },
  {
    path: "/meeting/:id",
    name: "Meeting",
    component: PreviewMeeting,
  },
];
export default appRoutes;
