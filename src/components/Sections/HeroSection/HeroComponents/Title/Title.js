import React from "react";

import './Title.scss';

const Title = () => {
  return (
    <div className="title-wrapper">
      <h1 className="title">
        <p className="title-row">
          <span>Dive</span> Into The Depths
        </p>
        <p className="title-row">
          Of <span>Virtual Reality</span>
        </p>
      </h1>
    </div>
  );
};

export default Title;