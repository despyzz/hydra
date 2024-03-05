import Button from "../../../../Common/Button/Button";
import ArrowRight from "../../../../../images/HeroSection/ArrowRight.svg";
import React from "react";

import './Start.scss';

const Start = ({content}) => {
  return (
    <div className="start-wrapper">
      <div className="start">
        <Button classList="start-button" content={content} light/>
        <div className="start-arrow">
          <img className="arrow-img" src={ArrowRight} alt="Arrow icon."/>
        </div>
      </div>
    </div>
  );
};

export default Start;