import React from "react";

import './ServicesSection.scss';

import Introduction from "../../Common/Introduction";
import Services from "./ServicesComponents/Services";

import Decoration from '../../../images/ServicesSection/ServicesDecorationDesctop.svg';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <Introduction labelFirst="why build"
                    labelSecond="with hydra?"
                    description="Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinarproin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliqueteget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncusvitae."
      />
      <Services/>
      <img className='services-desktop-decoration' src={Decoration} alt="Services decoration"/>
    </section>
  );
}

export default ServicesSection;