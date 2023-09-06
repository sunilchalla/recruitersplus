import React from "react";
import { BrowserRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope, faFileLines, faHouse, faUserGroup,

} from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar w/ text</a> */}
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
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  <FontAwesomeIcon icon={faHouse} />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <FontAwesomeIcon icon={faUserGroup} />
                  Panelist
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <FontAwesomeIcon icon={faFileLines} />
                  Job Description
                </a>
              </li>
            </ul>
            <span class="navbar-text d-flex">
              <div className="user_circle">
                <span>DP</span>
              </div>
              <div className="d-grid">
                <span>Durga Pavan</span>
                <a >Edit Profile</a>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );


};

export default Navbar;
