import React from "react";

const projects = () => {
  const projectcard = [
    {
      img: "",
      name: "SpeedKash",
      subText: "Fintech Web App",
      cardText: "Enabling users save, take loan and shop for products and services"
    },
  ];
  return (
    <div className="projects">
      <div className="heading">
        <h4>Featured Projects</h4>
        <hr />
      </div>
      <div className="project-card">
        <img src="" alt="" />
        <div className="card-details">
          <div className="cardName">
            <div className="title">
              <h3>SpeedKash</h3>
              <p className="sub-text">Fintech Web App</p>
            </div>
          </div>
          <div className="cardText">
            <p>
              Enabling users save, take loan and shop for products and services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default projects;
