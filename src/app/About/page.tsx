import React from "react";
import "../Styles/About.css"; 

const Page = () => {
  return (
    <div className="about-container">
      <div className="background-image">
        <img src="/image.png" alt="background" className="image"/>
        <div className="content-container">
          <h1 className="title">About Us</h1>
          <h2 className="subtitle">
          Welcome to TRIPI WORLD, Travel is more than just the act of moving from one place to another, it is an enriching experience that broadens our horizons, introduces us to new cultures, and creates lifelong memories. Whether it&apos;s a weekend getaway or a month-long journey, the joys of travel are truly unparalleled.One of the most exciting aspects of travel is the opportunity to explore new destinations.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;