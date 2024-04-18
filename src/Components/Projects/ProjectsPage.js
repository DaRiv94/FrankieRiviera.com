import React, { Component } from "react";
import PortolioApp from "../Portfolio/PortfolioApp";
import AzureInnovationStationProjectApp from "./AzureInnovationStationProjectApp";
import VerticalCareersProjectPage from "./VerticalCareersProjectPage";
// import ProjectApp from "./ProjectApp";
import "./Project.css";
import { Helmet } from "react-helmet";


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
            Here you will find my active projects. If you are interested in working with me regarding any of the following, please reach out to me at <a href="mailto:Frankie@FrankieRiviera.com">Frankie@FrankieRiviera.com</a>
          </h5>

        </div>
        <Helmet>
            <script>
              {`
    (function (w, d, e, u, f, l, n) {
      w[f] = w[f] || function () {
        (w[f].q = w[f].q || [])
        .push(arguments);
      }, l = d.createElement(e), l.async = 1, l.src = u,
      n = d.getElementsByTagName(e)[0], n.parentNode.insertBefore(l, n);
    })
      (window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
    ml('account', '849879');
    `}
            </script>
          </Helmet>
        <AzureInnovationStationProjectApp />
        <VerticalCareersProjectPage />
        {/* <PortolioApp {...kubernetes_demo} bgColor="#dbdbdb"/> */}
        {/* <PortolioApp {...containerapps_demo} /> */}

      </div>
    );
  }
}

export default PortfolioPage;
