import React, { useState } from "react";
import { HabitModal } from "../HabitModal/HabitModal";
import "./habitnav.css";
const HabitNav = ({ title }) => {
  const [isModal, setIsModal] = useState(false);
  return (
    <>
      <div className="habit-navbar-cont">
        <span>{title}</span>
        <div className="add-habit-btn">
          <button onClick={() => setIsModal(true)}>
            <span>+</span> <div>Add Habits</div>
          </button>
        </div>
        {isModal && <HabitModal openModal={(isModal) => setIsModal(isModal)} />}
      </div>
    </>
  );
};

export { HabitNav };
