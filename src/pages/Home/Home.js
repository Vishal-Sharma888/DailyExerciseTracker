import React from "react";
import "./home.css";
import { Navbar } from "../../component/Navbar/Navbar";
import { HomeSection } from "../../component/HomeSection/HomeSection";
const Home = () => {
  return (
    <>
      <div className="homepage-main-sec">
        <Navbar />
        <div>
          <HomeSection />
        </div>
      </div>
    </>
  );
};

export { Home };
