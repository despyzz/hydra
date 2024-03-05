import React from "react";

import './TechSection.scss';

import Label from "../../Common/Label";

import Banner from '../../../images/TechSection/Banner.png';
import Slider from "../../Common/Slider";

import Unreal from "../../../images/TechSection/Unreal.png";
import Unity from "../../../images/TechSection/Unity.png";
import Oculus from "../../../images/TechSection/Oculus.png";
import Vive from "../../../images/TechSection/Vive.png";

const TechItem = ({img, alt}) => {
  return (
    <div className="tech-item">
      <img src={img} alt={alt}/>
    </div>
  );
};

const Tech = () => {
  return (
    <Slider>
      <TechItem img={Unreal} alt="Unreal logo"/>
      <TechItem img={Unity} alt="Unity logo"/>
      <TechItem img={Oculus} alt="Oculus logo"/>
      <TechItem img={Vive} alt="Vive logo"/>

    </Slider>
  );
};

const TechSection = () => {
  return (
    <section className="tech-section">
      <div className="tech-section__banner-wrapper">
        <img className="tech-section__banner" src={Banner} alt="Tech banner"/>
        <Label lineFirst="TECHNOLOGIES & HARDWARE"
               lineSecond="USED BY HYDRA VR."
        />
      </div>

      <Tech/>
    </section>
  );
}

export default TechSection;