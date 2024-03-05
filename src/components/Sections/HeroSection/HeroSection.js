import React from "react";

import './HeroSection.scss';

import Hero from "./HeroComponents/Hero";
import Title from "./HeroComponents/Title";
import Description from "../../Common/Description";
import Start from "./HeroComponents/Start";
import Contacts from "./HeroComponents/Contacts";

import DecorationsDesktop from "../../../images/HeroSection/HeroDecorationsDesktop.svg";
import DecorationsMobile from "../../../images/HeroSection/HeroDecorationsMobile.svg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Hero/>
      <Title/>
      <Description content="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore
        nisl tincidunt eget. Lectus mauris eros in vitae."/>
      <Start content="build your world"/>
      <Contacts/>
      <img className="decorations-desktop" src={DecorationsDesktop} alt="Decorations"/>
      <img className="decorations-mobile" src={DecorationsMobile} alt="Decorations"/>
    </section>
  );
}

export default HeroSection;
