import React from "react";

import Image from "../../../../images/Logo/Image.svg";
import Title from "../../../../images/Logo/Title.svg";

import './Logo.scss';

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img className="logo__img"
           src={Image} alt="Hydra logo."/>
      <img className="logo__label"
           src={Title} alt="Hydra label."/>
    </a>
  );
};

export default Logo;