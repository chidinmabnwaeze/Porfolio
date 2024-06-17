import React, { useState } from "react";
import rectangle from "../assets/images/Rectangle slide.png";

const shots = () => {
  const [Slides, setSlides] = useState([
    {
      img: rectangle
    },
    {
        img: rectangle
      },
      {
        img: rectangle
      }
  ]);

  return (
    <div className="shots">
      <div className="heading">
        <p>My beautiful UI shots</p>
      </div>
      <div className="slideshow">
      <div className="shot-slide">
        {Slides.map((slide, index) => (
            
          <div className="slides" key={index}>
            <img src={slide.img} alt="" />
          </div>
        ))}
        </div>

        <div className="previous-next">
          <div className="previous">
            <p>Previous</p>
            <img src="" alt="" />
          </div>
          <div className="next">
            <p>Next</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default shots;
