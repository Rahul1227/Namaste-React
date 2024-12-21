import React from 'react';
import './Shimmer.css';

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer-header">
        
        <div className="shimmer-page-top"></div>
        <div className="shimmer-search"></div>
        <div className="shimmer-top-rated"></div>
      </div>

      <div className="shimmer-container">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <div className="shimmer" key={index}>
              <div className="shimmer-img"></div>
              <div className="inside-shimmer1"></div>
              <div className="inside-shimmer2"></div>
              <div className="inside-shimmer3"></div>
              <div className="inside-shimmer4"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
