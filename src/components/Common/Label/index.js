import React from "react";

import './Label.scss';

const Label = ({lineFirst, lineSecond}) => {
  return (
    <h2 className="label">
      <p>{lineFirst}</p>
      <p>
        <span>{lineSecond}</span>
      </p>
    </h2>
  );
};

export default Label;