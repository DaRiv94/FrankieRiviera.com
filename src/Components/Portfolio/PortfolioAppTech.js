import React from 'react';

const PortfolioAppTech = ({technology}) => {
    return (<> 
    <span className="technology-used ">{technology.tech} : </span>
    <span >{technology.use}</span>
    <br></br>
    </>);
}
 
export default PortfolioAppTech;