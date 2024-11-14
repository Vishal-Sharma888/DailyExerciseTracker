import React from "react";
import "./habitlisting.css";
import { Sidebar } from "../../component/Sidebar/Sidebar";
import { HabitNav } from "../../component/HabitNavbar/HabitNav";
import { HabitCard } from "../../component/Cards/HabitCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const HabitListing = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const habitDataList = useSelector((state) => state.habitData.habits);
  return (
    <>
      <div className="habit-cont">
        <Sidebar />
        <div className="habit-listing-cont">
          {token ? (
            <>
              <HabitNav title={"Habit Section"} />
              {habitDataList.length < 1 || habitDataList[0].length < 1 ? (
                <div className="habit-sec">
                  No Habits Yet , Please Add New Habits
                </div>
              ) : (
                habitDataList[0].map((val, index) => {
                  return <HabitCard key={index} data={val} />;
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

export { HabitListing };
