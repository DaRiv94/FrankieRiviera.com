import React, { Component } from "react";
import SkoolLandingPageImage from '../../images/SkoolLandingPageImage.png'



class AzureInnovationStationCommunityProject extends Component {
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
      link = "https://www.skool.com/microsoft-azure/about?ref=9e4d4ca563414105a3799fbf7610cae7 ",
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

          <h3>Azure Innovation Station Online Community</h3>
          <p>With big changes in the technology industry, landing high paying tech dream jobs can seem overwhelming, intimidating, and maybe impossible</p>
          <p>But if you are not alone, learning technology paired with high demand soft skills can accellerate your career to landing your dream job in months not years!</p>
          <p>As a Microsoft Azure MVP, I created the Azure Innovation Station community to help new and experienced technology professionals earn more with jobs using Microsoft Azure </p>
          <p>To learn more, check out the <a target="_blank" rel="noopener noreferrer" href="https://www.skool.com/microsoft-azure/about?ref=9e4d4ca563414105a3799fbf7610cae7 ">AzureInnovationStation Community</a></p>
          {/* <p>To get a FREE list of Azure learning resources and subscribe to the Azure Innovation Station Newsletter you can go <a target="_blank" rel="noopener noreferrer" href="https://azureinnovationstation.com/#subscribe">HERE!</a></p> */}
        </div>
      </div>
    );
  }
}


export default AzureInnovationStationCommunityProject;
