import Button from "../../../../Common/Button/Button";
import Slider from "../../../../Common/Slider";
import Simulation from "../../../../../images/ServicesSection/Simulation.png";
import Education from "../../../../../images/ServicesSection/Education.png";
import SelfCare from "../../../../../images/ServicesSection/SelfCare.png";
import Outdoor from "../../../../../images/ServicesSection/Outdoor.png";
import React from "react";

import './Services.scss';

const ServicesItem = ({img, alt, title, description}) => {
  return (
    <div className='services-item'>
      <div className="services-item__photo-wrapper">
        <img src={img} alt={alt} className="services-item__photo"/>
      </div>
      <h3 className="services-item__title">
        {title}
      </h3>
      <p className="services-item__description">
        {description}
      </p>
      <Button light content="try it now"/>
    </div>
  );
};

const Services = () => {
  return (
    <Slider>
      <ServicesItem img={Simulation}
                    alt="Simulation image."
                    title="SIMULATION"
                    description="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
      />
      <ServicesItem img={Education}
                    alt="Education image."
                    title="Education"
                    description="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
      />
      <ServicesItem img={SelfCare}
                    alt="Self-care image."
                    title="SELF-CARE"
                    description="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
      />
      <ServicesItem img={Outdoor}
                    alt="Outdoor image."
                    title="OUTDOOR"
                    description="Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae."
      />
    </Slider>
  );
};

export default Services;