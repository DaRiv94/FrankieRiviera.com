import React, { Component } from "react";
// import PortolioApp from "./PortfolioApp";
import "../Portfolio.css";
import PortfolioAppTech from "../PortfolioAppTech";

//this is all my in Memory Data
import inMemoryData from "../../Common/inMemoryData";
import OverviewImage from "../../../images/FGR_kubernetes_demo_overview.png"
// import BilliardReplayInfoDiagram from "../../../images/custom_vision_license_plate_detector_info_Diagram.png"

class KubernetesDemoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            custom_vision_license_plate_detector: inMemoryData.custom_vision_license_plate_detector,
        }

    }

    render() {
        let { custom_vision_license_plate_detector } = this.state

        return (
            <div className="portfolio-page-main-div container-fluid">
                <div className="container portfolioDivHead">
                    <h2>Custom Vision License Plate Detector</h2>
                    <h5>
                        {custom_vision_license_plate_detector.description}
                    </h5>
                    <strong>Key Features include...</strong>
                    <ul className="keyFeatures">
                        {custom_vision_license_plate_detector.features.map(feature => {
                            return <li key={feature} >{feature}</li>;
                        })}
                    </ul>

                    <h5>
                        Add a GIF here and LINK TO WEBSITE
                    </h5>
                    

                    <h2>Source Code</h2>
                    <p>Frontend Github Repository can be found <a href="https://github.com/DaRiv94/FGR_Custom_Object_Detection_Frontend">Here</a></p>
                    <p>Backend Github Repository can be found <a href="https://github.com/DaRiv94/FGR_Custom_Object_Detection_Backend">Here</a></p>

                    <h5>
                        Back to <a href="/portfolio">portfolio page</a>
                    </h5>
                </div>

            </div>
        );
    }
}

export default KubernetesDemoPage;
