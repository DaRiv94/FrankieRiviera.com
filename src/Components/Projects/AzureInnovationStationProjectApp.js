import React, { Component } from "react";
// import AzureInnovationStationLogo from '../../images/AzureInnovationStation02.jfif'
import SkoolLandingPageImage from '../../images/SkoolLandingPageImage.png'


class AzureInnovationStationProjectApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAppDescription: true
    };

  }




  render() {
    //these are the defaults for these values, unless they are in props. then the values will be what are passed in
    const {
      title = "SomeTitle",
      link = "https://azureinnovationstation.com/community",
      // bgColor = "#e5e6e5",
      bgColor = "#dbdbdb",
      image = SkoolLandingPageImage,
      separatePage
    } = this.props;

    return (
      <div
        id={title}
        style={{ backgroundColor: bgColor }}
        className="portfolio-app-row row"
      >
        <div className="col-12 offset-sm-2 offset-md-1 col-md-4">
          <a className="app-pic-link" href={link} target="_blank" rel="noopener noreferrer">
            <img className="app-pic" src={image} alt={title} />
          </a>
        </div>
        <div className="app-info col-12 col-md-6">

          <h3>Azure Innovation Station </h3>
          <p>While working at Microsft, I saw a need for addtional education to compliment the great work Microsoft is doing with the Azure cloud.</p>
          <p>I created Azure Innovation Station to help businesses and individuals solve problems using Microsoft Azure.</p>
          <p>How?</p>
          <p>✅ I publish videos free on <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@AzureInnovationStation">YouTube</a></p>
          <p>✅ I manage a Free <a target="_blank" rel="noopener noreferrer" href="https://azureinnovationstation.com/community"> Online Microsoft Azure Community </a></p>
          <p>✅ I do custom Azure Training and consulting for businesses and individuals</p>
        </div>
      </div>
    );
  }
}


export default AzureInnovationStationProjectApp;
