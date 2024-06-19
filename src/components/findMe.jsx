import React from "react";
import linkedin from "../assets/icons/social_linkedin.png"

const findMe = () => {
    const icons =[
        {
            img: linkedin
        }
    ]
  return (
    <div className="workWithUs">
      <div className="heading">
        <p>Let's make magic together</p>
        <hr />
      </div>
      <div className="summary">
        <p className="summary-text">
          I really love my work and can’t wait to work with you. I am also open
          to full-time, part-time and contract roles All you need to do is to
          send an email or reach me on any of my social media handles and we can
          get started. I would love to hear about your project.
        </p>
      </div>
      <button className="CTA">
          Send message <img src="" alt="" />
        </button>
        <div className="sm-links">
            {icons.map(()=>(
    <div className="icon-links">
    <span>Find me on</span>
    <img src={linkedin} alt="" />
</div>
            ))}
        
        </div>
    </div>
  );
};

export default findMe;
