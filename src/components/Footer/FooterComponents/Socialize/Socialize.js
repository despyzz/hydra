import React from "react";

import Button from "../../../Common/Button/Button";

import Facebook from "../../../../images/Socials/facebook.svg";
import Instagram from "../../../../images/Socials/instagram.svg";
import Linkedin from "../../../../images/Socials/linkedin.svg";
import Pinterest from "../../../../images/Socials/pinterest.svg";
import Twitter from "../../../../images/Socials/twitter.svg";
import Youtube from "../../../../images/Socials/youtube.svg";

import './Socialize.scss';

const Socialize = () => {
  return (
    <div className="socialize-wrapper">
      <div className="socialize">
        <h2 className="socialize__label">
          socialize with hydra
        </h2>

        <div className="socialize__icons-wrapper">
          <div className="socialize__icons">
            <a href="/facebook">
              <img className="icon"
                   src={Facebook}
                   alt="Facebook icon"
              />
            </a>
            <a href="/instagram">
              <img className="icon"
                   src={Instagram}
                   alt="Instagram icon"
              />
            </a>
            <a href="/linkedin">
              <img className="icon"
                   src={Linkedin}
                   alt="Linkedin icon"
              />
            </a>
            <a href="/pinterest">
              <img className="icon"
                   src={Pinterest}
                   alt="Pinterest icon"
              />
            </a>
            <a href="/twitter">
              <img className="icon"
                   src={Twitter}
                   alt="Twitter icon"
              />
            </a>
            <a href="/youtube">
              <img className="icon"
                   src={Youtube}
                   alt="Youtube icon"
              />
            </a>
          </div>
        </div>

        <div className="socialize__button-wrapper">
          <Button className="socialize__button"
                  content="build your world"
                  light
          />
        </div>
      </div>
    </div>
  );
};

export default Socialize;