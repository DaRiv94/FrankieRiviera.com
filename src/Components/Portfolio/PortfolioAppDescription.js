import React from "react";
import PropTypes from 'prop-types';

const PortfolioAppDescription = ({title, description, link}) => {
  return (
    <>
      <p>{description}</p>
      <p>
        <a href={link} target="_blank">
          Check out {title} here.{" "}
        </a>
        (Or click the picture)
      </p>
    </>
  );
};

PortfolioAppDescription.propTypes ={
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string
}

export default PortfolioAppDescription;
