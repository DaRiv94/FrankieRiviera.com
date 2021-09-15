import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";




const HomePage = () => {
  return (
    <div className="home container">
      <div className="welcome-div">
        <h1 className="welcome-banner">Welcome to FrankieRiviera.com</h1>
        <h4>
          Thank you for visiting my online portfolio, please go to the{" "}
          <Link to="/about">About Me</Link> page to learn more. Or to my <Link to="/portfolio">Portfolio</Link> page to see some of my work.
        </h4>
      </div>
    </div>
  );
};

export default HomePage;
