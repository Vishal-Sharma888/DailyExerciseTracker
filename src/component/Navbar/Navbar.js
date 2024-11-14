import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-main-div">
      <Link to="/" className="site-name">
        <div>Daily Exercises Tracker</div>
      </Link>
      <div className="login-cont">
        <Link to="/signup" className="signup-div text-decoration">
          <div>Signup</div>
        </Link>
        <Link to="/login" className="login-div text-decoration">
          <div>Login</div>
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
