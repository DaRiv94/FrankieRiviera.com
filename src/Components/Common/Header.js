import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import fgrPic from "../../images/FGR_Transparent.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <React.Fragment>
      <div className="jumbotron">
        <a href="/">
          <img
            className="fgrlogo"
            width="150"
            height="150"
            alt="couldnt find it"
            src={fgrPic}
          />
        </a>

        <h1 className="wide-header-title jumbotron">Frankie G. Riviera</h1>

        <Navbar className="MainNavBar"  expand="sm">
        <Navbar.Brand className="small-header-title" href="/">Frankie G. Riviera</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                className="btn btn-primary"
                activeClassName="active"
                exact
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="btn btn-primary"
                activeClassName="active"
                to="/about"
              >
                About Me
              </NavLink>
              <NavLink
                className="btn btn-primary"
                activeClassName="active"
                to="/portfolio"
              >
                Portfolio
              </NavLink>

              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item
                  target="_blank"
                  href="https://1drv.ms/b/s!AmvR4B65PaCHovVQ5IDcNDOUC0x5AQ"
                >
                  Resume
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://www.linkedin.com/in/frankie-riviera/"
                >
                  LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://github.com/DaRiv94"
                >
                  GitHub
                </NavDropdown.Item>
                <NavDropdown.Item
                  target="_blank"
                  href="https://github.com/DaRiv94/FrankieRiviera.com"
                >
                  This Site's Repo
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </React.Fragment>
  );
};

export default Header;
