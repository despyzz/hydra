import React from 'react';

import './Header.scss';

import { Logo, DropdownMenu, Navigation, Buttons } from "./HeaderComponents";

const Header = () => {
  return (
    <header className="header">
      <Logo/>
      <DropdownMenu/>
      <Navigation/>
      <Buttons/>
    </header>
  )
};

export default Header;