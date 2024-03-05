import React from "react";
import LocationIcon from "../../../../../images/HeroSection/LocationIcon.svg";
import CallIcon from "../../../../../images/HeroSection/CallIcon.svg";
import MailIcon from "../../../../../images/HeroSection/MailIcon.svg";

import './Contacts.scss';
import Slider from "../../../../Common/Slider";

const ContactsItem = ({id, icon, alt, label, description}) => {
  return (
    <div id={id} className="contacts__item">
      <div className="contacts__item-icon">
        <img src={icon} alt={alt}/>
      </div>
      <h2 className="contacts__item-label">
        {label}
      </h2>
      <h3 className="contacts__item-description">
        {description}
      </h3>
    </div>
  );
};

const Contacts = () => {
  return (
    <Slider>
      <ContactsItem icon={LocationIcon}
                    alt="Our location."
                    label="Pay Us a Visit"
                    description="Union St, Seattle, WA 98101, United States"
      />
      <ContactsItem icon={CallIcon}
                    alt="Our phone number."
                    label="Give Us a Call"
                    description="(110) 1111-1010"
      />
      <ContactsItem icon={MailIcon}
                    alt="Our email address."
                    label="Send Us a Message"
                    description="Contact@HydraVTech.com"
      />
    </Slider>
  );
}


export default Contacts;