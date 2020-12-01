import React, { Component } from "react";
// import PortolioApp from "./PortfolioApp";
import "../Portfolio.css";

//this is all my in Memory Data
import inMemoryData from "../../Common/inMemoryData";
import OverviewImage from "../../../images/FGR_kubernetes_demo_overview.png"
import ClusterDetailsImage from "../../../images/detailed_fgr_kubernetes_demo.png"

class KubernetesDemoPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kubernetes_demo: inMemoryData.kubernetes_demo,
    }

  }

  render() {
    let { kubernetes_demo } = this.state

    return (
      <div className="portfolio-page-main-div container-fluid">
        <div className="container portfolioDivHead">
          <h2>FGR Kubernetes Demo</h2>
          <h5>
            This Kubernetes demo demonstrates my proficiency with Containerization,
            Kubernetes, and the building of full-scale applications from scratch using a microservice architecture.
            This demo application use case is a personal budget app that connects to bank accounts and allows users to track transactions, and manage budgets.
          </h5>
          <h5>
            Link to demo application can be found here and at the end of this page.  <a href={kubernetes_demo.link}> <img className="budgetDemoIcon" src={kubernetes_demo.image} />  Running Kubernetes Demo</a>
          </h5>
          <h2>Key features include…</h2>
          <ul>
            <li>
              Uses Kubernetes to orchestrate containers
            </li>
            <li>
              Microservice architecture allows for ideal separation of concerns
            </li>
            <li>
            Demo allows users to  create accounts, connect to bank accounts, and manage budgets
            </li>
            <li>
              Uses Azure Kubernetes Service for Cloud Hosting
            </li>
          </ul>
          <h2>Highlighted technologies and services involved.</h2>
          <ul>
            <li>
              <strong>Kubernetes</strong> for container orchestration
            </li>
            <li>
              <strong>Docker</strong> for container runtime
            </li>
            <li>
              <strong>Nginx-ingress</strong> for cluster load balancing
            </li>
            <li>
              <strong>Node.js</strong> for backend APIs
            </li>
            <li>
              <strong>React</strong> for frontend UI
            </li>
            <li>
              <strong>Postgres</strong> for database
            </li>
            <li>
              <strong>Plaid API</strong> for connecting bank accounts
            </li>
            <li>
              <strong>SendGrid API</strong> for email notifications
            </li>
            <li>
              <strong>Azure Kubernetes Service (AKS)</strong> for cloud hosting
            </li>
          </ul>
          <h2>The following is a list of the repos where the microservices and Kubernetes objects for this demo can be found</h2>
          <ul>
            <li>
              <a href="https://github.com/DaRiv94/fgr-budget-k8s">Kubernetes Objects Repo</a>
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
          <h2>Overview of Microservice Architecture</h2>
          <img className="explaination_image" src={OverviewImage} alt="Graphic of microservice layout" />
          <p>The following image displays the layout of the microservices within the Kubernetes demo.
          The budget app has a frontend client for interacting with the user. The backend is the gateway to the auth service and the database.
          The webhook service is hit by the external Plaid API where it stores transaction data in the database and notifies the user via the email service about new transactions, account balances or any other relevant user account info.
          The backend can also trigger the webhook immediately to get transactions from the Plaid API.
          To keep demo data light, there is a data clean up CronJob that removes data from the demo application periodically.
            The email service uses SendGrid to send email notifications. </p>
          <h2>Overview of Kubernetes Cluster Objects</h2>
          <img className="explaination_image" src={ClusterDetailsImage} alt="Graphic of microservice layout" />
          <p>This diagram displays the inner setup of the Kubernetes cluster for the FGR Kubernetes demo.
          An ingress service using nginx-ingress controller is set up to allow for traffic to access frontend assets, call the backend, and also route to the webhook when the Plaid API notifies the application about new transactions.
          The base deployments are currently configured for one pod each, but could easily be scaled up to multiple pods if ingress traffic greatly increased.
          ClusterIP services are used to connect pods across the cluster.
          The CronJob has no need for a ClusterIP Service since no pods within the cluster need to access it.
          The Postgres pod connects to a Persistent Volume Claim which is bound to a Persistent Volume which maps data on to the Nodes file system.
          In a real world production application, your long-term persisting data should not rely on the Node's file system and should use more reliable external data persistence options.
          The current setup is intended to keep the demo simple and hosting expenses low.  </p>
          <h5>
          Link to demo application can be found here and at the top of this page below the description. <a href={kubernetes_demo.link}><img className="budgetDemoIcon" src={kubernetes_demo.image} />Running Kubernetes Demo</a>
          </h5><h5>
          Back to <a href="/portfolio">portfolio page</a>
          </h5>
        </div>

      </div>
    );
  }
}

export default KubernetesDemoPage;
