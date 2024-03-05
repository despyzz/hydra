import React from "react";

import './Description.scss';

const Description = ({content}) => {
  return (
    <div className="description-wrapper">
      <h3 className="description">
        {content}
      </h3>
    </div>
  );
};

export default Description;