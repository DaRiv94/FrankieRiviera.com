import React, { Component } from "react";
import PortolioApp from "./PortfolioApp";
import "./Portfolio.css";

//this is all my in Memory Data
import inMemoryData from "../Common/inMemoryData";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gighub: inMemoryData.gighub,
      geolocation: inMemoryData.geolocation,
      fgrApiDocs: inMemoryData.fgrApiDocs,
      vidlyapi: inMemoryData.vidlyapi,
      fgrPresidentApi: inMemoryData.fgrPresidentApi,
      fgrUsColonyApi: inMemoryData.fgrUsColonyApi,
      computerVisionApiExample: inMemoryData.computerVisionApiExample
    };
  }

  render() {
    const {
      gighub,
      geolocation,
      fgrApiDocs,
      vidlyapi,
      fgrPresidentApi,
      fgrUsColonyApi,
      computerVisionApiExample
    } = this.state;
    return (
      <div className="portfolio-page-main-div container-fluid">
        <div className="container portfolioDivHead">
          <h2>Welcome to my portfolio!</h2>
          <h5>
            This is where you can see several projects I have developed to
            showcase my knowledge and skill using a variety of software
            technologies. The links below are shortcuts to projects I have
            developed that are displayed on this page.
          </h5>
          <ul>
            <li>
              <a href={"#" + computerVisionApiExample.title}>{computerVisionApiExample.title}</a> -{" "}
              {computerVisionApiExample.shortDescription}
            </li>
            <li>
              <a href={"#" + gighub.title}>{gighub.title}</a> -{" "}
              {gighub.shortDescription}
            </li>
            <li>
              <a href={"#" + geolocation.title}>{geolocation.title}</a> -{" "}
              {geolocation.shortDescription}
            </li>
            <li>
              <a href={"#" + fgrApiDocs.title}>{fgrApiDocs.title}</a> -{" "}
              {fgrApiDocs.shortDescription}
            </li>
            <li>
              <a href={"#" + vidlyapi.title}>{vidlyapi.title}</a> -{" "}
              {vidlyapi.shortDescription}
            </li>
            <li>
              <a href={"#" + fgrPresidentApi.title}>{fgrPresidentApi.title}</a>{" "}
              - {fgrPresidentApi.shortDescription}
            </li>
            <li>
              <a href={"#" + fgrUsColonyApi.title}>{fgrUsColonyApi.title}</a> -{" "}
              {fgrUsColonyApi.shortDescription}
            </li>
          </ul>
        </div>
        <PortolioApp {...computerVisionApiExample} bgColor="#dbdbdb" />
        <PortolioApp
          // title={gighub.title}
          // description={gighub.description}
          // image={gighub.picture}
          // link={gighub.link}
          // technologies={gighub.technologies}
          {...gighub}
          
        />
        <PortolioApp {...geolocation} bgColor="#dbdbdb"/>
        <PortolioApp {...fgrApiDocs}  />
        <PortolioApp {...vidlyapi} bgColor="#dbdbdb"/>
        <PortolioApp {...fgrPresidentApi} />
        <PortolioApp {...fgrUsColonyApi} bgColor="#dbdbdb"/>
      </div>
    );
  }
}

export default PortfolioPage;
