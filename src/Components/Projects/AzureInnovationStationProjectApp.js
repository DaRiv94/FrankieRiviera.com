import React, { Component } from "react";

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
      link = "http://frankieriviera.com/",
      // bgColor = "#e5e6e5",
      bgColor = "#dbdbdb",
      image = "https://via.placeholder.com/300",
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
          <p>I am creating an Azure resource hub to empower individuals, start ups and enterprise businesses to be more successful in using the Azure Cloud.</p>
          {/* add the mailer lite contnet here */}
        </div>
      </div>
    );
  }
}


export default AzureInnovationStationProjectApp;
