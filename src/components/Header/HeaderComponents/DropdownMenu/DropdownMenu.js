import React, {useEffect, useRef, useState} from "react";
import Hamburger from "../../../../images/Navigation/Button.svg";

import './DropdownMenu.scss';

import Navigation from "../Navigation";
import Buttons from "../Buttons";
import Button from "../../../Common/Button/Button";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className="dropdown">
      <Button className="dropdown-button"
              content={<img src={Hamburger} alt="Hamburger menu."/>}
              onClick={(event) => {
                event.stopPropagation();
                setIsOpen(!isOpen);
              }}
      />
      {isOpen && (
        <div className="dropdown-content" ref={menuRef}>
          <Navigation/>
          <Buttons/>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;