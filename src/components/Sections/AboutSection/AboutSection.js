import React from "react";

import './AboutSection.scss';
import Description from "../../Common/Description";

import Image from '../../../images/AboutSection/Image.png';
import DecorationDesktop from '../../../images/AboutSection/AboutDecordationDesktop.svg';
import Button from "../../Common/Button/Button";
import Label from "../../Common/Label";
import Introduction from "../../Common/Introduction";


const AboutSection = () => {
  return (
    <section className="about-section">

      <Introduction labelFirst="introduction"
                    labelSecond="to hydra vr"
                    description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar
          proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet
          eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus
          vitae."
      />

      <div className="about-content">
        <div className="about-image-wrapper">
          <img className="about-image"
               src={Image}
               alt="Man with VR set"
          />
        </div>

        <div className="about">
          <Label lineFirst="about" lineSecond="hydra vr"/>
          <Description
            content="Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncusurna neque
            viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravidadictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in.Mattis aliquam faucibus purus in massa. Est placerat in egestas erat
            imperdietsed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquametiam erat velit scelerisque
            in dictum non consectetur a. Laoreet sit ametcursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem
            nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudin tempor."
          />
          <Button light content="let`s get in touch"/>
        </div>
      </div>

      <img className="about-section__desktop-decoration" src={DecorationDesktop} alt="Section desktop decoration"/>
    </section>
  );
};

export default AboutSection;