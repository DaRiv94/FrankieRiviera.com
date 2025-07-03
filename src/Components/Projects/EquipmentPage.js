import React, { Component } from "react";
import "./Project.css";



//this is all my in Memory Data
import inMemoryData from "../Common/inMemoryData";

class EquipmentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gighub: inMemoryData.gighub,

      
    };
  }

  render() {
    const {
      gighub,

    } = this.state;
    return (
      <div className="portfolio-page-main-div container-fluid">
        <div className="container equipmentDivHead">
          <h1>Welcome to my Equipment + Software Page!</h1>
          <h4>When people ask me about my equipment and software I use for Content Creation I share this with them! <span className="note" >(Note: Some items contain affiliate links)</span></h4>
          <h1>Hardware</h1>
          <h5>
            <a href="https://amzn.to/3I59wAP">Lumix Panasonic GH5 (Body only)</a> for filming 
          </h5>
          <h5>
            <a href="https://amzn.to/3Id2GZP">Lumix Panasonic GH5 20mm Lens</a> for wide angle shot 
          </h5>
          <h5>
            <a href="https://amzn.to/45TI5nh">Cam LINK</a> to stream video from GH5 to OBS
          </h5>
          <h5>
            <a href="https://amzn.to/403KcBb">Display link Hub </a>for connecting hardware components 
          </h5>
          <h5>
            2 <a href="https://amzn.to/44w711E">Dell 32 inch Monitors</a>  for display
          </h5>
          
          <h5>
            <a href="https://amzn.to/3G6CgIQ">Bose Speakers</a> for audio output
          </h5>
          <h5>
            <a href="https://amzn.to/4kmEulg">Blue Yeti Microphone</a> for audio input 
          </h5>
          <h5>
            <a href="https://amzn.to/3TjqE8h">Monitor Stands</a> for organization 
          </h5>
          <h5>
            <a href="https://amzn.to/44LGU8n">Travel Monitor</a> for a second screen on the go 
          </h5>
          <h1>Software</h1>
          <h5>
            <a href="https://www.adobe.com/products/premiere/campaign/pricing.html">Adobe Creative Cloud Premiere pro</a>for Video Editing
          </h5>
          <h5>
            <a href="https://obsproject.com/">OBS Studio</a> for screen recording + video + audio Capture
          </h5>
          <h5>
            2 <a href="https://www.canva.com/">Canva </a> for thumbnails
          </h5>
          
          <h5>
            <a href="https://www.adobe.com/products/photoshop.html">Adobe Creative Cloud Photoshop</a> for thumbnails
          </h5>
          <h5>
            <a href="https://code.visualstudio.com/">Visual Studio Code</a> for coding
          </h5>
          <h5>
            <a href="https://learn.microsoft.com/en-us/sysinternals/downloads/zoomit">Zoomit</a> for enhancing screen recordings
          </h5>
          <h5>
            <a href="https://www.microsoft.com/en-us/microsoft-365/powerpoint">Microsoft PowerPoint</a>  for Slides
          </h5>

        </div>
      </div>
    );
  }
}

export default EquipmentPage;
