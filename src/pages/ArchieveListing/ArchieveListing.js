import React from "react";
import "./archievelisting.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { HabitNav } from "../../component/HabitNavbar/HabitNav";
import { Sidebar } from "../../component/Sidebar/Sidebar";
import { ArchiveCard } from "../../component/Cards/ArchiveCard";
const ArchieveListing = () => {
  const navigate = useNavigate();
  const archiveData = useSelector((state) => state.habitData.archives);
  const token = localStorage.getItem("token");
  return (
    <>
      <div className="archive-cont">
        <Sidebar />
        <div className="archive-listing-cont">
          {token ? (
            <>
              <HabitNav title={"Archive Section"} />
              {archiveData.length < 1 || archiveData[0].length < 1 ? (
                <div className="archive-sec">No Habits in Archive Yet.</div>
              ) : (
                archiveData[0].map((val, index) => {
                  return <ArchiveCard key={index} data={val} />;
                })
              )}
            </>
          ) : (
            <div className="blank-div">
              <img
                src="https://i.pinimg.com/originals/58/22/46/58224674a4868f695d1f0e4ff61bf959.gif"
                alt="login"
              />
              <span onClick={() => navigate("/login")}>
                Please Click To Login
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export { ArchieveListing };
