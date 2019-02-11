import React from "react";

const PortfolioApp = ({
  title = "SomeTitle",
  image = "https://via.placeholder.com/300",
  description = "SomeDescription",
  link ="http://frankieriviera.com/",
  bgColor=" #e5e6e5"
}) => {
  return (
    <div style={{backgroundColor:bgColor}} className="portfolio-app-row row">
      <div className="col-12 offset-sm-2 offset-md-1 col-md-4">
        <a className="app-pic-link" href={link} target="_blank"><img className="app-pic" src={image} alt={title} /></a>
      </div>
      <div className="app-info col-12 col-md-6">
        <h2>{title}</h2>
        <p >{description}</p>
        <p><a href={link} target="_blank">Check out {title} here. </a>(Or click the picture)</p>
        
      </div>
    </div>
  );
};

export default PortfolioApp;
