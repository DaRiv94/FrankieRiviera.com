import React, { Component } from "react";
import PortfolioAppDescription from "./PortfolioAppDescription";
import PortfolioAppTech from "./PortfolioAppTech";
import PortfolioAppButtons from "./PortfolioAppButtons";
import PropTypes from "prop-types";
import ckad_image from '../../images/ckad_from_cncfsite.png'
import terraform_image from '../../images/Terraform-Associate-Badge.png'
import azure_developer_image from '../../images/azure-developer-associate-600x600.png'


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
    //https://www.youracclaim.com/badges/fe571b34-07dd-4298-915c-32dca08d8e5a
    return (
      <div
        id={title}
        style={{ backgroundColor: bgColor }}
        className="portfolio-app-row row"
      >
        <div className="col-12 offset-sm-2 offset-md-1 col-md-4">
          <a className="app-pic-link" href={separatePage ? separatePage : link} target={separatePage ? "" : "_blank"} rel="noopener noreferrer">
            <img className="app-pic" src={image} alt={title} />
          </a>
        </div>

        <div className="app-info col-12 col-md-6">
          {this.appButtons()}

          {title == "FGR Kubernetes Demo" && <h2>{title}
            <a href="https://www.youracclaim.com/badges/fe571b34-07dd-4298-915c-32dca08d8e5a" target="_blank" >
              <img className="mybadge" src={ckad_image} alt="Certified Kubernetes Application Develper Badge" />
            </a>
            <a href="https://www.youracclaim.com/badges/7a1f9015-671f-420a-a5cc-b537818b2207" target="_blank" >
              <img className="mybadge" src={terraform_image} alt="HashiCorp Certified: Terraform Associate" />
            </a>
            <a href="https://www.credly.com/badges/552858cc-5d54-485b-b6d5-a6cba26191df" target="_blank" >
              <img className="mybadge" src={azure_developer_image} alt="Microsoft Certified: Azure Developer Associate" />
            </a></h2>
          }

          {title == "FGR Container Apps Demo" && <h2>{title}
            <a href="https://www.credly.com/badges/552858cc-5d54-485b-b6d5-a6cba26191df" target="_blank" >
              <img className="mybadge" src={azure_developer_image} alt="Microsoft Certified: Azure Developer Associate" />
            </a>
          </h2>
          }

          {title == "FGR Secure API" && <h2>{title}
            <a href="https://www.youracclaim.com/badges/fe571b34-07dd-4298-915c-32dca08d8e5a" target="_blank" >
              <img className="mybadge" src={ckad_image} alt="Certified Kubernetes Application Develper Badge" />
            </a>
            <a href="https://www.credly.com/badges/552858cc-5d54-485b-b6d5-a6cba26191df" target="_blank" >
              <img className="mybadge" src={azure_developer_image} alt="Microsoft Certified: Azure Developer Associate" />
            </a>
          </h2>
          }

          {title == "API Management App" && <h2>{title}
            <a href="https://www.credly.com/badges/552858cc-5d54-485b-b6d5-a6cba26191df" target="_blank" >
              <img className="mybadge" src={azure_developer_image} alt="Microsoft Certified: Azure Developer Associate" />
            </a>
          </h2>
          }

          {title == "Custom Vision License Plate Detector" && <h2>{title}
            <a href="https://www.credly.com/badges/552858cc-5d54-485b-b6d5-a6cba26191df" target="_blank" >
              <img className="mybadge" src={azure_developer_image} alt="Microsoft Certified: Azure Developer Associate" />
            </a>
          </h2>
          }

          {title == "Computer Vision Api Example" && <h2>{title}
            <a href="https://www.credly.com/badges/552858cc-5d54-485b-b6d5-a6cba26191df" target="_blank" >
              <img className="mybadge" src={azure_developer_image} alt="Microsoft Certified: Azure Developer Associate" />
            </a>
          </h2>
          }



          {title == "FGR President API" && <h2>{title}
            <a href="https://www.credly.com/badges/552858cc-5d54-485b-b6d5-a6cba26191df" target="_blank" >
              <img className="mybadge" src={azure_developer_image} alt="Microsoft Certified: Azure Developer Associate" />
            </a>
          </h2>
          }

          {title == "FGR US Colony API" && <h2>{title}
            <a href="https://www.credly.com/badges/552858cc-5d54-485b-b6d5-a6cba26191df" target="_blank" >
              <img className="mybadge" src={azure_developer_image} alt="Microsoft Certified: Azure Developer Associate" />
            </a>
          </h2>
          }

          {title != "FGR Kubernetes Demo"
            && title != "FGR Secure API"
            && title != "FGR Container Apps Demo"
            && title != "API Management App"
            && title != "Custom Vision License Plate Detector"
            && title != "Computer Vision Api Example"
            && title != "FGR President API"
            && title != "FGR US Colony API"
            && <h2>{title}</h2>}

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
