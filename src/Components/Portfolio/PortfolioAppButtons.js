import React from "react";

const PortfolioAppbuttons = ({
  clickDescription,
  clickTechnologies,
  showAppDescription
}) => {
  return (
    <div className="portfolio-app-buttons">
      <button
        className={showAppDescription ? " description active" : "description"}
        type="submit"
        onClick={clickDescription}
        
      >
      Description
      </button>
        
     

      <button
        className={!showAppDescription ? "tech active" : "tech"}
        type="submit"
        onClick={clickTechnologies}
      >
        Technologies
      </button>
    </div>
  );
};

export default PortfolioAppbuttons;
