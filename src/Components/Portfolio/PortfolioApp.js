import React, { Component } from "react";
import PortfolioAppDescription from "./PortfolioAppDescription";
import PortfolioAppTech from "./PortfolioAppTech";
import PortfolioAppButtons from "./PortfolioAppButtons";
import PropTypes from "prop-types";

class PortfolioApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAppDescription: true
    };

    this.appDetails = this.appDetails.bind(this);
    this.appButtons = this.appButtons.bind(this);
    this.clickDescription = this.clickDescription.bind(this);
    this.clickTechnologies = this.clickTechnologies.bind(this);
  }

  clickDescription() {
    this.setState({
      showAppDescription: true
    });
  }

  clickTechnologies() {
    this.setState({
      showAppDescription: false
    });
  }

  appButtons() {
    return (
      <PortfolioAppButtons
        showAppDescription={this.state.showAppDescription}
        clickDescription={this.clickDescription}
        clickTechnologies={this.clickTechnologies}
      />
    );
  }

  appDetails() {
    const {
      title,
      description,
      link,
      features,
      repo,
      separatePage,
      technologies = [{ tech: "HTML", use: "For Static markup" }]
    } = this.props;

    if (this.state.showAppDescription) {
      return (
        <PortfolioAppDescription
          title={title}
          description={description}
          link={link}
          features={features}
          repo={repo}
          separatePage={separatePage}
        />
      );
    } else {
      return (
        <>
          {technologies.map(technology => {
            return (
              <PortfolioAppTech
                className=""
                key={technology.tech}
                technology={technology}
              />
            );
          })}
        </>
      );
    }
  }

  render() {
    //these are the defaults for these values, unless they are in props. then the values will be what are passed in
    const {
      title = "SomeTitle",
      link = "http://frankieriviera.com/",
      bgColor = "#e5e6e5",
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
          <a className="app-pic-link" href={separatePage ? separatePage: link} target={separatePage ? "": "_blank"} rel="noopener noreferrer">
            <img className="app-pic" src={image} alt={title} />
          </a>
        </div>

        <div className="app-info col-12 col-md-6">
          {this.appButtons()}
          <h2>{title}</h2>
          {this.appDetails()}
        </div>
      </div>
    );
  }
}

PortfolioApp.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  bgColor: PropTypes.string,
  technologies: PropTypes.array.isRequired
};

export default PortfolioApp;
