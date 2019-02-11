import React, { Component } from "react";
import Header from "./Components/Common/Header";
import { Route } from "react-router-dom";

import "./App.css";//I should import this before the other pages, otherwise their CSS will be overriden by App.css
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/About/AboutPage";
import PortfolioPage from './Components/Portfolio/PortfolioPage';




class App extends Component {
  render() {
    return (
      <div className="fullpage">
        <div className=" container">
          <Header />
          </div>

          
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          
         
        
      </div>
    );
  }
}

export default App;
