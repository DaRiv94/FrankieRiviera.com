import React, { Component } from "react";
// import PortolioApp from "./PortfolioApp";
import "../Portfolio.css";
import PortfolioAppTech from "../PortfolioAppTech";

//this is all my in Memory Data
import inMemoryData from "../../Common/inMemoryData";
import DemoGIF from "../../../images/FGR_Custom_Vision_License_Plate_Detector.gif"
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

                    <h2>Check out the running demo!</h2>
                    <h5>
                        Link to demo application can be found here.  <a target="_blank" href={custom_vision_license_plate_detector.link}> <img className="budgetDemoIcon" src={custom_vision_license_plate_detector.image} />  Running FGR Custom Vision License Plate Detector</a>
                    </h5>
                    <strong>Key Features include...</strong>
                    <ul className="keyFeatures">
                        {custom_vision_license_plate_detector.features.map(feature => {
                            return <li key={feature} >{feature}</li>;
                        })}
                    </ul>

                    <h5>
                        The YOLOv4 Object Detection Algorithm White Paper can be found <a target="_blank" href="https://arxiv.org/abs/2004.10934v1">Here</a>
                    </h5>


                    <h5>
                        See an example below!
                    </h5>
                    <div className="DivCustomVisionDemoGIF" >
                        <iframe title="CustomVisionDemoGIF" className="CustomVisionDemoGIF" src={DemoGIF}  ></iframe>
                    </div>


                    <h2>Source Code</h2>
                    <p className="repourl" >Frontend Github Repository can be found <a target="_blank" href="https://github.com/DaRiv94/FGR_Custom_Object_Detection_Frontend">Here</a></p>
                    <p className="repourl">Backend Github Repository can be found <a target="_blank" href="https://github.com/DaRiv94/FGR_Custom_Object_Detection_Backend">Here</a></p>

                    <h5>
                        Back to <a href="/portfolio">Portfolio Page</a>
                    </h5>
                </div>

            </div>
        );
    }
}

export default KubernetesDemoPage;
