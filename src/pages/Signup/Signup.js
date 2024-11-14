import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../component/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = () => {
  const navigate = useNavigate();
  const [userCred, setUserCred] = useState({
    email: "",
    pass: "",
    cpass: "",
  });
  const notify = () => toast("password not matched");
  const notifyAPIerror = () => toast("Got Api Error");
  const dataHandler = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserCred({ ...userCred, [name]: value });
  };
  const logInUser = async (e) => {
    e.preventDefault();
    if (userCred.pass === userCred.cpass) {
      await axios
        .post("/api/auth/signup", {
          firstName: "user",
          lastName: "test",
          email: userCred.email,
          password: userCred.password,
        })
        .then((res) => {
          localStorage.setItem("token", res.data.encodedToken);
          navigate("/habitlisting");
        })
        .catch((e) => notifyAPIerror());
    } else {
      notify();
    }
  };
  return (
    <>
      <div className="signup-main-cont">
        <Navbar />
        <ToastContainer />
        <div className="center-signup-cont">
          <div className="signup-wrapper">SIGN UP</div>
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
            <input
              type="password"
              placeholder="Enter Confirm Password"
              value={userCred.cpass}
              name="cpass"
              onChange={dataHandler}
            />
          </div>
          <div className="btn-cont">
            <button className="login-btn" onClick={logInUser}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { Signup };
