import React, { Component } from "react";
import Header from "./Components/Common/Header";
import { Route , Switch} from "react-router-dom";

import "./App.css";//I should import this before the other pages, otherwise their CSS will be overriden by App.css
import HomePage from "./Components/Home/HomePage";
import AboutPage from "./Components/About/AboutPage";
import PortfolioPage from './Components/Portfolio/PortfolioPage';
import ProjectsPage from './Components/Projects/ProjectsPage';
import KubernetesDemoPage from './Components/Portfolio/SubPage/KubernetesDemoPage';
import ContainerAppsDemoPage from './Components/Portfolio/SubPage/ContainerAppsDemoPage';
import FGRSecureAPIDemoPage from './Components/Portfolio/SubPage/FGRSecureAPIDemoPage';
import BilliardReplayDemoPage from './Components/Portfolio/SubPage/BilliardReplayDemoPage';
import CustomVisionDemoPage from './Components/Portfolio/SubPage/CustomVisionDemoPage';
import APIManagementDemoPage from './Components/Portfolio/SubPage/APIManagementDemoPage';
import NotFound from "./Components/Common/NotFound";
import PrivacyPolicy from "./Components/Common/PrivacyPolicy";
import DeviceRecommendations from "./Components/Common/DeviceRecommendations";




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
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/portfolio/kubernetes-demo" component={KubernetesDemoPage} />
          <Route exact path="/portfolio/azure-container-apps-deployment" component={ContainerAppsDemoPage} />
          <Route exact path="/portfolio/billiard-replay" component={BilliardReplayDemoPage} />
          <Route exact path="/portfolio/custom-vision" component={CustomVisionDemoPage} />
          <Route exact path="/portfolio/api-managment" component={APIManagementDemoPage} />
          <Route exact path="/portfolio/fgr-secure-api" component={FGRSecureAPIDemoPage} />
          
          
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/devicerecommendations" component={DeviceRecommendations} />
          
          <Route component={NotFound} />
          </Switch>
          
          
         
        
      </div>
    );
  }
}

export default App;
