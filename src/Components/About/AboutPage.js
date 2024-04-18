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
            I am a former Microsoft FTE, and Life long learner who wants to use my skills, knowledge, background and experience to help others.
          </p>
          <p>
            My passions for Jesus, People, Business, Technology and Learning have been leading me on a life long journey to generate peace joy and love for the Kingdom of God.
          </p>
          <p>
            At this stage in my journey, I believe God has positioned me to use my full time energy for two projects

            With my love of technology and background in technical sales and software engineering, I want to empower individuals, startups and businesses to drive innovation further then it has ever gone before using Microsoft Azure. I am currently doing this with Azure Innovation Station

            My passion for people, business and learning paired with my personal career experience and research inspired me to launch Vertical Careers. An educational platform to help individuals learn, level up, and take their careers to new heights!
          </p>
          <p>
            At this stage in my journey, I believe God has positioned me to use my full time energy for two projects.
          </p>
          <p>
            With my love of technology and background in technical sales and software engineering, I want to empower individuals, startups and businesses to drive innovation further then it has ever gone before using Microsoft Azure. I am currently doing this with <a target="_blank" rel="noopener noreferrer" href="https://azureinnovationstation.com">Azure Innovation Station</a>.
          </p>
          <p>
            My passion for people, business and learning paired with my personal career experience and research inspired me to launch <a target="_blank" rel="noopener noreferrer" href="https://VerticalCareers.com">Vertical Careers</a> . An educational platform to help individuals learn, level up, and take their careers to new heights!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
