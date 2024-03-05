import React from "react";
import './ProcessSection.scss';
import Introduction from "../../Common/Introduction";
import Slider from "../../Common/Slider";
import Arrow from "../../../images/Default/Arrow.svg";

import Decoration from '../../../images/ProcessSection/ProcessDecoration.svg'

const ProcessItem = ({number, label}) => {
  return (
    <div className="process-item">
      <div className="process-item__number-border">
        <div className="process-item__number-wrapper">
        <span className="process-item__number">
          {number}
        </span>
        </div>
      </div>
      <h3 className="process-item__label">
        <img src={Arrow} alt="Small arrow." className="process-item__label-arrow"/>
        <p>{label}</p>
      </h3>
    </div>
  );
};

const Process = () => {
  return (
    <Slider>
      <ProcessItem number="01"
                   label="3D Conception & Design"
      />
      <ProcessItem number="02"
                   label="Interaction Design"
      />
      <ProcessItem number="03"
                   label="VR World User Testing"
      />
      <ProcessItem number="04"
                   label="Hydra VR Deploy"
      />
    </Slider>
  );
};

const ProcessSection = () => {
  return (
    <section className="process-section">
      <Introduction labelFirst="HOW WE BUILD"
                    labelSecond="WITH HYDRA VR?"
                    description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat
                    nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo
                    quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare
                    lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae."
      />
      <Process/>
      <img className="process-section-decoration"
           src={Decoration}
           alt="Process decoration"
      />
    </section>
  );
}

export default ProcessSection;