import React from "react";

const projects = () => {
  const projectcard = [
    {
      img: "",
      name: "SpeedKash",
      subText: "Fintech Web App",
      link: "Live Project",
      cardText:
        "Enabling users save, take loan and shop for products and services",
      source: "",
    },
  ];
  return (
    <div className="projects">
      <div className="heading">
        <h4>Featured Projects</h4>
        <hr />
      </div>
      {projectcard.map((project, index)=>(
        <div className="project-card" key={index}>
        <img src="" alt="" />
        <div className="card-details">
          <div className="cardName">
            <div className="title">
              <h3>{project.name}</h3>
              <p className="sub-text">{project.subText}</p>
            </div>
            <div className="link">
              <a href="">{project.link}</a>
            </div>
          </div>
          <div className="cardText">
            <p>
              {project.cardText}
            </p>
          </div>
        </div>
      </div>
      ))}
      
    </div>
  );
};

export default projects;
