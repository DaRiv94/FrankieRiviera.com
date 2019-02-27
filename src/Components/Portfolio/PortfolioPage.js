import React, { Component } from "react";
import PortolioApp from "./PortfolioApp";
import "./Portfolio.css";

//this is all my in Memory Data
import inMemoryData from "../Common/inMemoryData";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gighub: inMemoryData.gighub,
      oldfgr: inMemoryData.oldfgr,
      geolocation: inMemoryData.geolocation
    };
  }

  render() {
    const { gighub, oldfgr, geolocation } = this.state;
    return (
      <div className="portfolio-page-main-div container-fluid">
        <PortolioApp
          // title={gighub.title}
          // description={gighub.description}
          // image={gighub.picture}
          // link={gighub.link}
          // technologies={gighub.technologies}
          {...gighub}
        />
        <PortolioApp {...geolocation} bgColor="#dbdbdb" />
        <PortolioApp {...oldfgr} />
      </div>
    );
  }
}

export default PortfolioPage;
