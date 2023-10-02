import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faMobileScreenButton,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import loginbanner from "../../assets/Rectangle 5.png";
import { useDispatch } from "react-redux";
import { initHistory } from "../../utilities/historyHandler";
const Login = () => {
  const history = useNavigate();
  initHistory(history);
  const dispatch = useDispatch();
  const [loginObj, setLoginObj] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };
  const handleLogin = () => {
    dispatch({ type: "ATTEMPT_LOGIN", payload: loginObj });

    // Perform login logic
  };
  return (
    <div>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-6 p-0">
            <div className="container d-flex justify-content-center align-items-center vh-100">
              <div className="p-4">
                <h2 className="text-center mb-4 fw-700">LOGIN</h2>
                <p>Start & Track your Scheduling Process </p>
                <form className="form-input-custom">
                  <div className="mb-3">
                    {/* <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" /> */}
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter Email Address"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        value={loginObj?.username}
                        onChange={(e) =>
                          setLoginObj((prev) => {
                            return { ...prev, username: e.target.value };
                          })
                        }
                      />
                    </InputGroup>
                  </div>
                  <div className="mb-3">
                    {/* <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" /> */}
                    <InputGroup className="mb-3">
                      <InputGroup.Text id="basic-addon1">
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Enter Password"
                        aria-label="password"
                        aria-describedby="basic-addon1"
                        value={loginObj?.password}
                        onChange={(e) =>
                          setLoginObj((prev) => {
                            return { ...prev, password: e.target.value };
                          })
                        }
                      />
                    </InputGroup>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block"
                      onClick={handleSubmit}
                    >
                      Login Now
                    </button>
                    <a href="/registration">Registration !</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 login_background">
            <div className="row container d-flex justify-content-center align-items-center vh-100">
              <div className="col-md-6 p-5">
                <h3 className="fw-700 c-white">
                  Very good works are waiting for you Login Now!!!
                </h3>
              </div>
              <div className="col-md-6">
                <img src={loginbanner} alt="" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
