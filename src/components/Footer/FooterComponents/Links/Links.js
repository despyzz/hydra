import React from "react";

import './Links.scss';

const Links = () => {
  return (
    <div className="links">
      <div className="links-block">
        <div className="links-block__content">
          <p>about</p>
          <p>services</p>
          <p>technologies</p>
          <p>how to</p>
          <p>join hydra</p>
        </div>
      </div>

      <div className="links-block">
        <div className="links-block__content">
          <p>f.a.q</p>
          <p>sitemap</p>
          <p>conditions</p>
          <p>licenses</p>
        </div>
      </div>
    </div>
  );
};

export default Links;