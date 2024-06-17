import React, { useState } from "react";
import rectangle from "../assets/images/Rectangle slide.png";
import arrowp from "../assets/icons/ooui_arrow-next-ltr.svg"
import arrown from "../assets/icons/ooui_arrow-next-ltr-1.svg"


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
        <hr />
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
            <img src={arrowp} alt="" />
            <p>Previous</p>
          </div>
          <div className="next">
            <p>Next</p>
            <img src={arrown} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default shots;
