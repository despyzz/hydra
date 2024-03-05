import Label from "../Label";
import Description from "../Description";
import React from "react";

import './Introduction.scss';

const Introduction = ({labelFirst, labelSecond, description}) => {
  return (
    <div className="introduction">
      <Label lineFirst={labelFirst} lineSecond={labelSecond}/>
      <Description content={description}/>
    </div>
  );
};

export default Introduction;