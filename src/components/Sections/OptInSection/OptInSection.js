import React from "react";
import './OptInSection.scss';
import Button from "../../Common/Button/Button";

const OptInSection = () => {

    return (
      <section className="opt-in__section">
        <h2 className="opt-in__title">
          join hydra
        </h2>
        <h3 className="opt-in__subtitle">
          Let’s Build Your VR Experience
        </h3>
        <form className="opt-in__form">
          <input className="opt-in__input"
                 type="text"
                 placeholder="First Name"
                 name="first_name"
          />
          <input className="opt-in__input"
                 type="text"
                 placeholder="Last Name"
                 name="last_name"
          />
          <input className="opt-in__input"
                 type="text"
                 placeholder="Email"
                 name="email"
          />
          <input className="opt-in__input"
                 type="text"
                 placeholder="Phone Number"
                 name="phone"
          />
          <input className="opt-in__input"
                 type="text"
                 placeholder="Subject"
                 name="subject"
          />
          <textarea className="opt-in__text-area"
                    placeholder="Tell Us something"
                    name="additional"
          />

          <Button className="opt-in__send-button"
                  content="send to hydra"
                  light
          />
        </form>
      </section>
    );
}

export default OptInSection;