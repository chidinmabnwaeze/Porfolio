import React from "react";
import image1 from '../assets/images/image 1.png'
import arrowo from "../assets/icons/arrow-outward.svg"

const projects = () => {
  const projectcard = [
    {
      img: "",
      name: "SpeedKash",
      subText: "Fintech Web App",
      link: "Live Project",
      cardText:
        "Enabling users save, take loan and shop for products and services",
      source: ""
    },
    {
        img: "",
        name: "SpeedKash",
        subText: "Fintech Web App",
        link: "Live Project",
        cardText:
          "Enabling users save, take loan and shop for products and services",
        source: ""
      },
      {
        img: "",
        name: "SpeedKash",
        subText: "Fintech Web App",
        link: "Live Project",
        cardText:
          "Enabling users save, take loan and shop for products and services",
        source: ""
      },
      {
        img: "",
        name: "SpeedKash",
        subText: "Fintech Web App",
        link: "Live Project",
        cardText:
          "Enabling users save, take loan and shop for products and services",
        source: ""
      }
  ];
  return (
    <div className="projects">
      <div className="heading">
        <p>Featured Projects</p>
        <hr />
      </div>
      {projectcard.map((project, index)=>(
        <section className="myProjects">
        <div className="project-card" key={index}>
        <img src={image1}alt="" />
        <div className="card-details">
          <div className="cardName">
            <div className="title">
              <h3>{project.name}</h3>
              <p className="sub-text">{project.subText}</p>
            </div>
            <div className="link">
              <a href="">{project.link}</a>
              <img src={arrowo} alt="" />
            </div>
          </div>
          <div className="cardText">
            <p>
              {project.cardText}
            </p>
          </div>
        </div>
      </div>
      </section>
      ))}
      
    </div>
  );
};

export default projects;
