import React, { Component } from "react";
import Header from "./Components/Common/Header";
import { Route , Switch} from "react-router-dom";

import "./App.css";//I should import this before the other pages, otherwise their CSS will be overriden by App.css
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/About/AboutPage";
import PortfolioPage from './Components/Portfolio/PortfolioPage';
import KubernetesDemoPage from './Components/Portfolio/SubPage/KubernetesDemoPage';
import BilliardReplayDemoPage from './Components/Portfolio/SubPage/BilliardReplayDemoPage';
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
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/portfolio/kubernetes-demo" component={KubernetesDemoPage} />
          <Route exact path="/portfolio/billiard-replay" component={BilliardReplayDemoPage} />
          <Route component={NotFound} />
          </Switch>
          
          
         
        
      </div>
    );
  }
}

export default App;
