import React from "react";

import './Button.scss';

const Button = (props) => {
  const {light, dark, content, onClick, className} = props;
  let buttonClass = className + " button";
  if (light) buttonClass += " button-light";
  if (dark) buttonClass += " button-dark";
  return (
    <button className={buttonClass}
            onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;