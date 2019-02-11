import React, { Component } from "react";
import PortolioApp from "./PortfolioApp";
import "./Portfolio.css";
import oldFgrWebsite from '../../images/OldFgrWebsite.JPG'

class PortfolioPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gighub: {
        title: "GigHub",
        description:
          "This is a website for live concert lovers to attend, and schedule live concerts, and to follow other artists ",
        picture: "https://via.placeholder.com/250"
      },
      oldfgr: {
        title: "My Old Website",
        description:
          "looking for the old FrankieRiviera.com? Here it is, my former static website, with my old resume, video portfolio, and kensington internship newsletters",
        picture: oldFgrWebsite,
        link:"http://frankgriviera.azurewebsites.net/index.html"
      }
    };
  }
  render() {
    const { gighub, oldfgr } = this.state;
    return (
      <div className="portfolio-page-main-div container-fluid">
        <PortolioApp
          title={oldfgr.title}
          description={oldfgr.description}
          image={oldfgr.picture}
          link={oldfgr.link}
        />
        <PortolioApp
          title={gighub.title}
          description={gighub.description}
          image={gighub.picture}
          bgColor="#dbdbdb"
        />
      </div>
    );
  }
}

export default PortfolioPage;
