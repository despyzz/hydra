import Image from "../../../../images/Logo/Image.svg";
import React from "react";

import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <div className="logo">
        <img src={Image} alt="" className="logo-img"/>
      </div>
    </div>
  );
};

export default Logo;