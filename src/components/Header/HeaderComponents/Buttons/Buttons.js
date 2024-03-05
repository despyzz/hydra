import React from "react";

import './Buttons.scss';
import Button from "../../../Common/Button/Button";

const Buttons = () => {
  return (
    <div className="buttons">
      <Button light content="contact us"/>
      <Button dark content="join hydra"/>
    </div>
  );
};

export default Buttons;