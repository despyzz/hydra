import React from "react";

import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="/about">about</a>
        </li>
        <li className="nav__list-item">
          <a href="/services">services</a>
        </li>
        <li className="nav__list-item">
          <a href="/technologies">technologies</a>
        </li>
        <li className="nav__list-item">
          <a href="/howto">how to</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;