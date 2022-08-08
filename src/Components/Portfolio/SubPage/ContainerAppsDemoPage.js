import React, { Component } from "react";
// import PortolioApp from "./PortfolioApp";
import "../Portfolio.css";

//this is all my in Memory Data
import inMemoryData from "../../Common/inMemoryData";
import OverviewImage from "../../../images/FGR_kubernetes_demo_overview.png"
import DeploymentDetails from "../../../images/fgr_budgetapp_aca_deployment.png"

class KubernetesDemoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerapps_demo: inMemoryData.containerapps_demo,
    }

  }

  render() {
    let { containerapps_demo } = this.state

    return (
      <div className="portfolio-page-main-div container-fluid">
        <div className="container portfolioDivHead">
          <h2>FGR Container Apps Demo</h2>
          <h5>
            This Container Apps deployment demonstrates my proficiency with containerization, Azure’s Infrastructure as Code Domain Specific Language Bicep,
            and use of Azure’s serverless container offering Azure Container Apps.
            The application use case follows my previous Kubernetes deployment of a personal budget app that connects to bank accounts and allows users to track transactions,
            and manage budgets.
          </h5>

          <h2>Access to Demo</h2>
          <h5>
            Ask me about getting access to the FGR Container Apps Demo at <a href="mailto:FrankGRiviera@outlook.com">FrankGRiviera@outlook.com</a>. I will get back to you with a link to check it out!
          </h5>
          {/* <h2>Check out the running demo!</h2>
          <h5>
            Link to demo application can be found here <a href={containerapps_demo.link}> <img className="budgetDemoIcon" src={containerapps_demo.image} />  Running Azure Container Apps Demo</a>
          </h5> */}
          <h2>Overview of Microservice Architecture</h2>
          <img className="explaination_image" src={DeploymentDetails} alt="Graphic of microservice layout" />
          <p>The diagram above displays the architecture setup of my FGR budget app deployment using Azure Container Apps. 
            Resources can be created using Bicep in order to leverage The power of infrastructure as code for reliable, and quick deployments. 
            The frontend application allows for external ingress while the rest of the container apps only allow ingress within the container app environment. 
            Postgres DB tables are populated via entering into the webhook container to run database migrations using Object Relational Mapper Sequelize.  </p>

          <h2>The following is a list of the repos where the microservices and Kubernetes objects for this demo can be found</h2>
          <ul>
            <li>
              <a href="https://github.com/DaRiv94/fgr-budget-containerapps">Azure Container Apps Deployment Repo</a>
            </li>
            <li>
              <a href="https://github.com/DaRiv94/fgr_dynamic_auth">FGR Dynamic Authentication Service Repo</a>
            </li>
            <li>
              <a href="https://github.com/DaRiv94/fgr-budget-backend-v2">Backend Service Repo</a>
            </li>
            <li>
              <a href="https://github.com/DaRiv94/fgr-budget-webhook-v2">Webhook Service Repo</a>
            </li>
            <li>
              <a href="https://github.com/DaRiv94/fgr_budget_email_service">Email Service Repo</a>
            </li>
            <li>
              <a href="https://github.com/DaRiv94/fgr-budget-frontend-v2">Frontend Service Repo</a>
            </li>
          </ul>
          <h2>Future improvements…</h2>
          <p>As we build software, we are never truly “finished”. Upgrades and Improvements can always be made to any given system. 
            Possible future upgrades to this system and deployment are as follows... </p>
          <ul>
            <li>
            Enable Dapr for easy plug and play capabilities for state management, and pub/sub capabilities.
            </li>
            <li>
            Use of KEDA to auto scale container apps based on concurrent requests and queue build ups
            </li>
            <li>
            Overcome frontend container environment variable injection current limitations
            </li>
            <li>
            Bootstrap container can be added to populate database tables and then scale to 0
            </li>
          </ul>

          {/* <h5>
          Link to demo application can be found here and at the top of this page below the description. <a href={kubernetes_demo.link}><img className="budgetDemoIcon" src={kubernetes_demo.image} />Running Kubernetes Demo</a>
          </h5> */}
          <h5>
            Back to <a href="/portfolio">Portfolio Page</a>
          </h5>
        </div>

      </div>
    );
  }
}

export default KubernetesDemoPage;
