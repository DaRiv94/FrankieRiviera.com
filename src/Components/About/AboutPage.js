import React from "react";
import "./About.css";
import bioPic from "../../images/ProfilePicGreySweatshirtBayPicCropped.jpg";

const AboutPage = () => {
  return (
    <div className="about-div container-fluid">
      <div className="row">
        <div className="  offset-sm-2 col-12 offset-md-1 col-md-4">
          <img
            className="bio-pic"
            src={bioPic}
            alt="Frankie G Riviera doing a backflip in graduation gown"
          />
        </div>
        <div className="bio col-12 col-md-6">
          <h1>Hi I'm Frankie,</h1>
          <p>
            I am a <a href="https://mvp.microsoft.com/en-US/mvp/profile/155125b2-3318-45a4-8008-bff246c0fbc3">Microsoft MVP</a>, former Microsoft FTE, and Life long learner who wants to use my skills, knowledge, background and experience to help others.
          </p>
          <p>
            My passions for Jesus, People, Business, Technology and Learning have been leading me on a life long journey to generate peace joy and love for the Kingdom of God.
          </p>
          <p>
            At this stage in my journey, I believe God has positioned me to use my full time energy to make intelligent application and innovation in Microsoft Azure simple and easy to understand for new and advanced technology professionals.
 
          </p>
          {/* <p>
            With my love of technology and background in technical sales and software engineering, I want to empower individuals, startups and businesses to drive innovation further then it has ever gone before using Microsoft Azure. I am currently doing this with <a target="_blank" rel="noopener noreferrer" href="https://azureinnovationstation.com">Azure Innovation Station</a>.
          </p>
          <p>
            My passion for people, business and learning paired with my personal career experience and research inspired me to launch <a target="_blank" rel="noopener noreferrer" href="https://VerticalCareers.com">Vertical Careers</a> . An educational platform to help individuals learn, level up, and take their careers to new heights!
          </p> */}
          {/* <p>
          With my love of people, business, technology paired with my background in technical sales and software engineering, I want to empower individuals, startups and businesses to drive innovation further than it has ever gone before using Microsoft Azure. I am currently doing this with <a target="_blank" rel="noopener noreferrer" href="https://azureinnovationstation.com">Azure Innovation Station</a>
          </p> */}
          <p>
          With my love of people, business, technology paired with my background in technical sales and software engineering, I want to help new and experienced technology professionals earn more and land dream jobs using Microsoft Azure. I am currently doing this with my <a target="_blank" rel="noopener noreferrer" href="https://www.skool.com/microsoft-azure/about?ref=9e4d4ca563414105a3799fbf7610cae7">Azure Innovation Station Online Community</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
