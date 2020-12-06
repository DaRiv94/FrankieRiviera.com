import React, { Component } from "react";
// import PortolioApp from "./PortfolioApp";
import "../Portfolio.css";
import PortfolioAppTech from "../PortfolioAppTech";

//this is all my in Memory Data
import inMemoryData from "../../Common/inMemoryData";
import OverviewImage from "../../../images/FGR_kubernetes_demo_overview.png"
import BilliardReplayInfoDiagram from "../../../images/Billiard_Replay_info_Diagram.png"

class KubernetesDemoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            billiard_replay: inMemoryData.billiard_replay,
        }

    }

    render() {
        let { billiard_replay } = this.state

        return (
            <div className="portfolio-page-main-div container-fluid">
                <div className="container portfolioDivHead">
                    <h2>Billiard Replay</h2>
                    <h5>
                        {billiard_replay.description}
                    </h5>
                    <strong>Key Features include...</strong>
                    <ul className="keyFeatures">
                        {billiard_replay.features.map(feature => {
                            return <li key={feature} >{feature}</li>;
                        })}
                    </ul>

                    <h5>
                        Billiard Replay Video Demo
                    </h5>
                    <div className="DivBilliardReplayVideoDemo" >
                        <iframe title="BilliardReplayVideoDemo" className="BilliardReplayVideoDemo" src="https://www.youtube.com/embed/mPahZvnc8dI" ></iframe>
                    </div>

                    <h2>Billiard Replay Info Graphic</h2>
                    <img className="explaination_image" src={BilliardReplayInfoDiagram} alt="Info Graphic of Billiard Replay app" />
                    <ul>
                        <li>
                            <strong>1.</strong> Instantly replay selected video files using VLC media player.
                        </li>
                        <li>
                            <strong>2.</strong> Displays currently selected video file.
                            When a video is captured, the current file will be updated to the captured video.
                        </li>
                        <li>
                            <strong>3.</strong> Quickly capture preset length videos. 
                            When Billiard shots are made, the quick grab options provide a user
                            with common video capture lengths so they can quickly capture the shot(s) 
                            that were made at the desired length.
                        </li>
                        <li>
                            <strong>4. </strong> Opens a modal to input and save new filenames. 
                            This is helpful so the user can more meaningfully identify a video.
                        </li>
                        <li>
                            <strong>5. </strong> Opens a file dialog to select previously saved video files. 
                            A selected video will update the displayed video file (see 2.) and can be emailed. (see 6.)
                        </li>
                        <li>
                            <strong>6. </strong> Opens a modal to input email and send a video.
                            This allows users to receive captured videos on any device. 
                        </li>
                        <li>
                            <strong>7. </strong> Close the program. 
                            Both this button and selecting the X at the top right of the window will close the program properly
                        </li>
                        <li>
                            <strong>8. </strong> Capture videos at custom video lengths from 1 second to 5 minutes (aka 300 seconds).
                            This feature is included in case a user would like a more exact video capture length.
                        </li>
                    </ul>
                    <p></p>

                    <h5>
                        Back to <a href="/portfolio">portfolio page</a>
                    </h5>
                </div>

            </div>
        );
    }
}

export default KubernetesDemoPage;
