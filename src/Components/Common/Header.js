import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import fgrPic from "../../images/FGR_Transparent.png";

const Header = () => {
  return (
    <React.Fragment>
      <div className="jumbotron">
      {/* <img className="fgrlogo" src="https://via.placeholder.com/150"/> */}
      <img className="fgrlogo" width="150" height="150" alt="couldnt find it" src={fgrPic}/>


        <h1 className="header-title jumbotron">Frankie G. Riviera</h1>
        
        <nav>
          <NavLink
            className="btn btn-primary"
            activeClassName="active"
            exact
            to="/"
          >
            Home
          </NavLink>
          {" | "}
          <NavLink
            className="btn btn-primary"
            activeClassName="active"
            to="/about"
          >
            About Me
          </NavLink>
        </nav>
        
      </div>
    </React.Fragment>
  );
};

export default Header;
