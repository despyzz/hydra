import React, {useEffect, useState} from "react";
import Button from "../Button/Button";

import './Slider.scss';

const Slider = ({children}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lastManualSwitch, setLastManualSwitch] = useState(0);

  const totalSlides = React.Children.count(children);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (Date.now() - lastManualSwitch > 15e3) {
        setCurrentSlide((currentSlide + 1) % totalSlides);
      }
    }, 5e3);

    return () => clearInterval(slideInterval);
  }, [currentSlide, totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
    setLastManualSwitch(Date.now());
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    setLastManualSwitch(Date.now());
  };

  const sliderStyle = {
    width: `${totalSlides * 100}%`,
    transform: `translateX(-${currentSlide * 100 / totalSlides}%)`,
    transition: 'transform 0.5s'
  };

  const slideStyle = {
    width: `${100 / totalSlides}%`
  };

  return (
    <div className="slider-wrapper">
      <div className="slider"
           style={sliderStyle}
      >
        {React.Children.map(children, (child, index) => {
          const isActive = index === currentSlide;
          return (
            <div className={`slider-slide ${isActive ? 'active' : ''}`}
                 style={slideStyle}
            >
              {child}
            </div>
          );
        })};
      </div>

      <Button className="slider-btn-prev"
              onClick={prevSlide}
      />
      <Button className="slider-btn-next"
              onClick={nextSlide}
      />
    </div>
  );
}

export default Slider;