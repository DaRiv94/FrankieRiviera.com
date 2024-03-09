import React, { Component } from "react";
import PortolioApp from "../Portfolio/PortfolioApp";
import AzureInnovationStationProjectApp from "./AzureInnovationStationProjectApp";
// import ProjectApp from "./ProjectApp";
import "./Project.css";

//this is all my in Memory Data
import inMemoryData from "../Common/inMemoryData";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gighub: inMemoryData.gighub,
      geolocation: inMemoryData.geolocation,
      fgrApiDocs: inMemoryData.fgrApiDocs,
      vidlyapi: inMemoryData.vidlyapi,
      fgrPresidentApi: inMemoryData.fgrPresidentApi,
      fgrUsColonyApi: inMemoryData.fgrUsColonyApi,
      computerVisionApiExample: inMemoryData.computerVisionApiExample,
      taskMaster: inMemoryData.taskMaster,
      kubernetes_demo: inMemoryData.kubernetes_demo,
      fgr_dynamic_auth_service: inMemoryData.fgr_dynamic_auth_service,
      billiard_replay: inMemoryData.billiard_replay,
      custom_vision_license_plate_detector: inMemoryData.custom_vision_license_plate_detector,
      api_management: inMemoryData.api_management,
      fgr_secure_api: inMemoryData.fgr_secure_api,
      containerapps_demo: inMemoryData.containerapps_demo,
      
    };
  }

  render() {
    const {
      gighub,
      geolocation,
      fgrApiDocs,
      vidlyapi,
      fgrPresidentApi,
      fgrUsColonyApi,
      computerVisionApiExample,
      taskMaster,
      kubernetes_demo,
      fgr_dynamic_auth_service,
      billiard_replay,
      custom_vision_license_plate_detector,
      api_management,
      fgr_secure_api,
      containerapps_demo
    } = this.state;
    return (
      <div className="portfolio-page-main-div container-fluid">
        <div className="container portfolioDivHead">
          <h2>Welcome to my Projects!</h2>
          <h5>
            Here you will find a few of the projects that are active and that I am working on. If you are interested in working with me you can contact me at <a href="mailto:Frankie@FrankieRiviera.com">Frankie@FrankieRiviera.com</a>
          </h5>

        </div>
        <AzureInnovationStationProjectApp />
        {/* <PortolioApp {...kubernetes_demo} bgColor="#dbdbdb"/> */}
        {/* <PortolioApp {...containerapps_demo} /> */}

      </div>
    );
  }
}

export default PortfolioPage;
