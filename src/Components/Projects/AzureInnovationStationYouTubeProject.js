import React, { Component } from "react";
import AzureInnovationStationLogo from '../../images/AzureInnovationStation02.jfif'


class AzureInnovationStationYouTubeProject extends Component {
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
      link = "https://www.youtube.com/@AzureInnovationStation",
      // bgColor = "#e5e6e5",
      bgColor = "#dbdbdb",
      image = AzureInnovationStationLogo,
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

          <h3>Azure Innovation Station YouTube Channel </h3>
          <p>While working at Microsft, I saw a need for addtional education to compliment the great work Microsoft is doing with the cloud.</p>
          <p>I created The Azure Innovation Station YouTube Channel to to empower individuals, startups and businesses to drive innovation further than it has ever gone before using Microsoft Azure.</p>
          <p>To learn more, check out the <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@AzureInnovationStation">AzureInnovationStation Channel</a></p>
          {/* <p>To get a FREE list of Azure learning resources and subscribe to the Azure Innovation Station Newsletter you can go <a target="_blank" rel="noopener noreferrer" href="https://azureinnovationstation.com/#subscribe">HERE!</a></p> */}
        </div>
      </div>
    );
  }
}


export default AzureInnovationStationYouTubeProject;
