import React, { Component } from "react";
import PortolioApp from "./PortfolioApp";
import "./Portfolio.css";

import inMemoryData from '../Common/inMemoryData';


class PortfolioPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gighub:inMemoryData.gighub,
      oldfgr:inMemoryData.oldfgr,
      geolocation:inMemoryData.geolocation
    };
  }

 




  render() {
    const { gighub, oldfgr,geolocation } = this.state;
    return (
      <div className="portfolio-page-main-div container-fluid">
        <PortolioApp
          title={gighub.title}
          description={gighub.description}
          image={gighub.picture}
          link={gighub.link}
          technologies={gighub.technologies}

        />
        <PortolioApp
          title={geolocation.title}
          description={geolocation.description}
          image={geolocation.picture}
          link={geolocation.link}
          bgColor="#dbdbdb"
          technologies={geolocation.technologies}
        />
        <PortolioApp
          title={oldfgr.title}
          description={oldfgr.description}
          image={oldfgr.picture}
          link={oldfgr.link}
          technologies={oldfgr.technologies}
        />
      </div>
    );
  }
}

export default PortfolioPage;
