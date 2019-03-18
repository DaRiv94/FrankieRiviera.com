import React from "react";
import PropTypes from "prop-types";

const PortfolioAppDescription = ({
  title,
  description,
  link,
  features,
  repo
}) => {
  return (
    <>
      <p>{description}</p>
      <p>
        <strong>Key Features include...</strong>
      </p>
      <ul className="keyFeatures">
        {features.map(feature => {
          return <li key={feature} >{feature}</li>;
        })}
      </ul>

      <p>
        Check out &nbsp;
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title} here.{" "}
        </a>
      </p>

      {title === "My Legacy Website" ? (
        <></>
      ) : (
        <p>
          See {title}&nbsp;
          <a href={repo} target="_blank" rel="noopener noreferrer">
            repository here.{" "}
          </a>
        </p>
      )}
    </>
  );
};

PortfolioAppDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string
};

export default PortfolioAppDescription;
