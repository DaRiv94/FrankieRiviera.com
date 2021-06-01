import React, { Component } from "react";
// import PortolioApp from "./PortfolioApp";
import "../Portfolio.css";

//this is all my in Memory Data
import inMemoryData from "../../Common/inMemoryData";
// import OverviewImage from "../../../images/FGR_kubernetes_demo_overview.png"
import ClusterDetailsImage from "../../../images/detailed_fgr_kubernetes_demo.png"
import architecturediagram from "../../../images/fgr-secure-api-architecture.png"

class FGRSecureAPIDemoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fgr_secure_api: inMemoryData.fgr_secure_api,
    }

  }

  render() {
    let { fgr_secure_api } = this.state

    return (
      <div className="portfolio-page-main-div container-fluid">
        <div className="container portfolioDivHead">
          <h2>FGR Secure API</h2>
          <h5>
            {fgr_secure_api.description}
          </h5>
          <h5>
            Link to demo application can be found <a target="_blank" href={fgr_secure_api.link}>Here</a>
          </h5>
          <h2>Overview of Microservice Architecture</h2>
          <img className="explaination_image" src={architecturediagram} alt="Graphic of microservice architecture" />
          <p>A User signs in with an existing Microsoft account, or signs up using an email. This is done using Azure Active Directory B2C User Flows. Once authenticated, 
            calls are made to backend apis by using a Json Web Token obtained from AAD B2C. API Management uses the validate-jwt policy to allow traffic to continue to backend APIS.
            Mutual TLS is used to secure communication between API Management and the AKS cluster. 
            API Management obtains a client certifate from azure key vault in order to communicate with the AKS cluster. 
            The AKS cluster contains its server certifate in a Kubernetes Secret that is used by the Ingress Resource when traffic first arrives at the Azure Load Balancer.
            Data is persisted outside the AKS cluster using an Azure Managed Disc.
          </p>
          <strong>Key Features include...</strong>
          <ul className="keyFeatures">
            {fgr_secure_api.features.map(feature => {
              return <li key={feature} >{feature}</li>;
            })}
          </ul>
          <strong>Highlighted technologies and services involved...</strong>
          <ul className="keyFeatures">
            {fgr_secure_api.technologies.map(technology => {
              return <> 
              <span className="technology-used ">{technology.tech} : </span>
              <span >{technology.use}</span>
              <br></br>
              </>;
            })}
          </ul>
         
          <h5>
            Back to <a href="/portfolio">Portfolio Page</a>
          </h5>
        </div>

      </div>
    );
  }
}

export default FGRSecureAPIDemoPage;
