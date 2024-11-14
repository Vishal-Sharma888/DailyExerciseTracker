import React from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const logoMeOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const motivationQuotesArr = [
    "Life is 10% what happens to you and 90% how you react to it.",
    "If you're going through hell, keep going",
    "It always seems impossible until it's done",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best",
    "Everything you can imagine is real.",
    "Do one thing every day that scares you",
    "Whatever you are, be a good one.",
    "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
  ];
  return (
    <>
      <div className="sidebar-brand-cont">
        <div className="sidebar-gif">
          <img
            src="https://i.pinimg.com/originals/33/6b/a2/336ba227b99cac98bdc63718e8cb881a.gif"
            alt="hii"
          />
          <span className="climber-heading">Climber</span>
        </div>
        <div className="sidebar-cont">
          <span
            onClick={() => navigate("/habitlisting")}
            className="display-flex"
          >
            <i className="fa-solid fa-briefcase"></i>
            <div>All habits</div>
          </span>
          <span
            className="display-flex"
            onClick={() => navigate("/archievelisting")}
          >
            <i className="fa-solid fa-box-archive"></i>
            <div>Archieved</div>
          </span>
          {token && (
            <span className="display-flex" onClick={logoMeOut}>
              <i className="fa-solid fa-right-from-bracket"></i>
              <div>Logout</div>
            </span>
          )}
        </div>
        <div className="motivatinal-quotes">
          <q>{motivationQuotesArr[Math.floor(Math.random() * 8)]}</q>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
