import React from "react";

import './Footer.scss';

import Logo from "./FooterComponents/Logo";
import Links from "./FooterComponents/Links";
import Socialize from "./FooterComponents/Socialize";
import Copyright from "./FooterComponents/Copyright";

import DecorationDesktop from "../../images/Footer/FooterDecorationsDesktop.svg";
import DecorationMobile from "../../images/Footer/FooterDecorationsMobile.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo/>
      <Links/>
      <Socialize/>
      <Copyright/>

      <img className="footer-decoration-desktop" src={DecorationDesktop} alt="Footer decoration"/>
      <img className="footer-decoration-mobile" src={DecorationMobile} alt="Footer decoration"/>
    </footer>
  );
}

export default Footer