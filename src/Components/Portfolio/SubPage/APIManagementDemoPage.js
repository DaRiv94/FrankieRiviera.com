import React, { Component } from "react";
// import PortolioApp from "./PortfolioApp";
import "../Portfolio.css";
import PortfolioAppTech from "../PortfolioAppTech";

//this is all my in Memory Data
import inMemoryData from "../../Common/inMemoryData";
import DemoPNG from "../../../images/0042_api_management_diagram.png"
// import BilliardReplayInfoDiagram from "../../../images/api_management_info_Diagram.png"

class KubernetesDemoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            api_management: inMemoryData.api_management,
        }

    }

    render() {
        let { api_management } = this.state

        return (
            <div className="portfolio-page-main-div container-fluid">
                <div className="container portfolioDivHead">
                    <h2>API Management</h2>
                    <h5>
                        {api_management.description}
                    </h5>

                    <h2>See how the APIs work using the API Management Developer Portal</h2>
                    <p>NOTE: Secure API Management instances should be secured by requiring Subscriptions to APIs. This API does not require Subscriptons and is for demonstration purposes only.</p>
                    <h5>
                        Link to Developer Portal can be found here.  <a target="_blank" href={api_management.link}> <img className="budgetDemoIcon" src={api_management.image} /> API Management Development Portal</a>
                    </h5>

                    <h2>What is the demo app? How does it work?</h2>

                    <p>The Demo is a "pick out of a hat" simulation. Where you can <i>Pick a number, Pick a food recipe</i> or <i>Pick a boardgame</i> out of a hat. 
                    You can pick out of a hat for the number, recipe and boardgame picker. You can also add boardgames and food recipes to their respective hats.
                     Both the recipe and boardgame hats start with default data and are periodically cleaned of newly added data.</p>

                    <h2>Architecture Diagram</h2>
                    <img className="explaination_image" src={DemoPNG} alt="Info Graphic of API management app" />
                    <p className="repourl"><strong>Azure API Management gateway</strong> is the API Management instance that is used as a reverse proxy for Function and Logic apps</p>
                    <p className="repourl"><strong>The Logic App - Number Picker</strong> API will return a random integer between 0 and your route parameter number - 1. (ex /number/10 -&gt; Random integer between 0-9) (ex2 /number/27 -&gt; Random integer between 0-26)</p>
                    <p className="repourl"><strong>Python Function - Boardgame Picker</strong> has a GET endpoint for getting random boardgames and a POST endpoint for creating new boardgames that can be randomly picked.</p>
                    <p className="repourl"><strong>JavaScript Function - Boardgame Picker</strong> has a GET endpoint for getting random recipes where both the food type and the url to the recipe is given and a POST endpoint for creating new recipes that can be randomly picked.</p>
                    <p className="repourl"><strong>Logic App - Reset Azure Storage</strong> is used to remove newly added data periodically. Default data will persist.</p>

                    <strong>Key Features include...</strong>
                    <ul className="keyFeatures">
                        {api_management.features.map(feature => {
                            return <li key={feature} >{feature}</li>;
                        })}
                    </ul>

                    <h2>Source Code</h2>
                    <p className="repourl" >Boardgame Picker Github Repository can be found <a target="_blank" href="https://github.com/DaRiv94/PickOutOfAHatPython">Here</a></p>
                    <p className="repourl">Recipe Picker Github Repository can be found <a target="_blank" href="https://github.com/DaRiv94/PickOutOfAHatJavascript">Here</a></p>

                    <h5>
                        Back to <a href="/portfolio">Portfolio Page</a>
                    </h5>
                </div>

            </div>
        );
    }
}

export default KubernetesDemoPage;
