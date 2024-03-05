import HeroImg from "../../../../../images/HeroSection/Hero.jpg";
import React from "react";

import './Hero.scss';

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <img className="hero-img"
             src={HeroImg}
             alt="Virtual hero."
        />
      </div>
    </div>
  );
};

export default Hero;