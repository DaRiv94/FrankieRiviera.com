import React, { Component } from "react";
import VerticalCareersLogo from '../../images/VerticalCareersLogoWhiteBackground.png'


class VerticalCareersProjectApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAppDescription: true
    };

  }




  render() {
    //these are the defaults for these values, unless they are in props. then the values will be what are passed in
    const {
      title = "SomeTitle",
      link = "https://VerticalCareers.com",
      bgColor = "#e5e6e5",
      // bgColor = "#dbdbdb",
      // bgColor = "##dbdbdb",
      image = VerticalCareersLogo,
      separatePage
    } = this.props;

    return (
      <div
        id={title}
        style={{ backgroundColor: bgColor }}
        className="portfolio-app-row row"
      >
        <div className="col-12 offset-sm-2 offset-md-1 col-md-4">
          <a className="app-pic-link" href={link} target="_blank" rel="noopener noreferrer">
            <img className="app-pic" src={image} alt={title} />
          </a>
        </div>
        <div className="app-info col-12 col-md-6">

          <h3>Vertical Careers </h3>
          <p>Being passionate about people, business and learning from a young age, paired with some unique career success that I have acheived early in my career. I share my experience alongside research to help you land your dream job and take your career to new heights!</p>
          <p>To learn more, check out <a target="_blank" rel="noopener noreferrer" href="https://VerticalCareers.com">VerticalCareers.com</a></p>
          <p>To get a FREE step by step guide on the path that every career explorer must take when embarking on the job hunt you can go <a target="_blank" rel="noopener noreferrer" href="https://VerticalCareers.com/#subscribe">HERE!</a></p>
        </div>
      </div>
    );
  }
}


export default VerticalCareersProjectApp;
