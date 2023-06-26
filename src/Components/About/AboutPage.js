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
From a very young age I have been engaged in learning the subjects of Science, Technology, Engineering and Mathematics. When I was 11, I built my first electrical circuit. When I was 13, I built my first C# application. As I grew up, I continued my learning by attending Michigan State University and earning a Bachelor of Science in Computer Engineering. While in school, I learned about computers from the lowest levels of transistors and machine language, to the highest levels of server-side and client-side development. After school, I further developed my skills to enter the software technology industry as a software engineer at a local Michigan startup. After a few years that involved a company Acquisition and Covid 19 forcing the whole world to embrace remote work, I took the next step in my career by joining Microsoft in Enterprise Technical Sales. I lead discussions with leading healthcare technology executives on Digital Transformation and Application Innovation in the Microsoft Azure Cloud. I am a passionate technologist and futurist that is excited and determined to use my skills and knowledge to positively accelerate the world into the next technological revolution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
