import React from "react";
import {
  Link,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faFileLines,
  faHouse,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const navLinks = [
    {
      icon: faHouse,
      name: "Home",
      to: "/dashboard",
      activeNavs: ["/dashboard"],
    },
    {
      icon: faUserGroup,
      name: "Panelist",
      to: "/panelist",
      activeNavs: ["/panelist"],
    },
    {
      icon: faFileLines,
      name: "Job Description",
      to: "/jobdescriptions",
      activeNavs: ["/jobdescriptions"],
    },
    {
      icon: faFileLines,
      name: "My Team",
      to: "/myteam",
      activeNavs: ["/myteam"],
    },
  ];
  const activePath = window.location.pathname;
  const dispatch = useDispatch()
  const user = useSelector((store) => store.RECRUITER);
  return (
    <div className="p-0 nav-shadow">
      <nav class="navbar navbar-expand-lg " style={{ background: "white" }}>
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              {navLinks.map((i) => {
                return (
                  <li
                    className={`nav-item ${
                      i.activeNavs.includes(activePath)
                        ? "active-custom-nav"
                        : ""
                    }`}
                  >
                    <Link className="nav-link" to={i.to}>
                      <FontAwesomeIcon icon={i.icon} className="px-2" />
                      {i.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <span class="navbar-text d-flex">
              <div className="user_circle">
                <span>DP</span>
              </div>
              <div className="d-grid">
                <span>{user?.displayName}</span>
                <a onClick={() => dispatch({ type: "LOGOUT_USER" })}>Log Out</a>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
