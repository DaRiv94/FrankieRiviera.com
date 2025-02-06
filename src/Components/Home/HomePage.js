import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";




const HomePage = () => {
  return (
    <div className="home container">
      <div className="welcome-div">
        <h1 className="welcome-banner">Welcome to FrankieRiviera.com</h1>
        <h4>
          Thank you for visiting! Please go to the{" "}
          <Link to="/about">About Me</Link> page to learn more. Check out my active <Link to="/projects">Project</Link>. Or View my technical <Link to="/portfolio">Portfolio</Link>.
          {/* <Link to="/about">About Me</Link> page to learn more. Check out my active <Link to="/projects">Projects</Link>. Or View my technical <Link to="/portfolio">Portfolio</Link>. */}
        </h4>
      </div>
    </div>
  );
};

export default HomePage;
