import React, { Component } from "react";
import Header from "./Components/Common/Header";
import { Route , Switch} from "react-router-dom";

import "./App.css";//I should import this before the other pages, otherwise their CSS will be overriden by App.css
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/About/AboutPage";
import PortfolioPage from './Components/Portfolio/PortfolioPage';
import NotFound from "./Components/Common/NotFound";




class App extends Component {
  render() {
    return (
      <div className="fullpage">
        <div className=" container">
          <Header />
          </div>

          <Switch>
            <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route component={NotFound} />
          </Switch>
          
          
         
        
      </div>
    );
  }
}

export default App;
