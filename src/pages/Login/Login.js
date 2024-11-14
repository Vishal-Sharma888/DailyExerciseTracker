import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../component/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const [userCred, setUserCred] = useState({
    email: "",
    pass: "",
  });
  const dummyUser = {
    email: "abcd@gmail.com",
    pass: "abcd",
  };
  const notify = () => toast("Some Error Occured, refresh and retry");
  const addDummyUser = (e) => {
    e.preventDefault();
    setUserCred(dummyUser);
  };
  const dataHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserCred({ ...userCred, [name]: value });
  };
  const logInUser = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", {
        email: userCred.email,
        password: userCred.pass,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.encodedToken);
        navigate("/habitlisting");
      })
      .catch((e) => notify());
  };
  return (
    <>
      <div className="login-main-cont">
        <Navbar />
        <ToastContainer />
        <div className="center-login-cont">
          <div className="login-wrapper">LOGIN</div>
          <div className="input-fields">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={userCred.email}
              name="email"
              onChange={dataHandler}
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={userCred.pass}
              name="pass"
              onChange={dataHandler}
            />
          </div>
          <div className="btn-cont">
            <button className="login-btn" onClick={addDummyUser}>
              Login With Test Credential
            </button>
            <button className="login-btn" onClick={logInUser}>
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
