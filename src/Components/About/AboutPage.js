import React from "react";
import "./About.css";
import bioPic from "../../images/Square_large.jpg";

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
            From a very young age I have been engaged in learning the subjects
            of Science, Technology, Engineering and Mathematics. When I was 11, I
            built my first electrical circuit. When I was 13, I built my first C#
            application. As I grew up, I continued my learning by attending
            Michigan State University and earning a Bachelor of Science in
            Computer Engineering. While in school, I learned about computers
            from the lowest levels of transistors and machine language, to the
            highest levels of server-side and client-side development. After
            school, I found myself more interested in learning and developing
            technology than ever before. Which is why I am both excited and
            determined to be a great software engineer. I want to use my passion
            and skills as a software engineer to accelerate the world into the
            next technological revolution. I long to deploy positive solutions
            and innovations spanning a variety of global industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
