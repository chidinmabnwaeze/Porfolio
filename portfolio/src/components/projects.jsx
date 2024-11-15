import React from "react";
import image1 from '../assets/images/image 1.png'
import arrowo from "../assets/icons/arrow-outward.svg"
import image2 from '../assets/images/image2.png'
// import image3 from "../assets/images/img 3.png"
// import image4 from "../assets/images/image 4.png"

const projects = () => {
  const projectcard = [
    {
      img: image1,
      name: "SpeedKash",
      subText: "Fintech Web App",
      link: "Live Project",
      cardText:
        "Enabling users save, take loan and shop for products and services",
      source: ""
    },
    {
        img: image2,
        name: "SpeedKash",
        subText: "Fintech Web App",
        link: "Live Project",
        cardText:
          "Enabling users save, take loan and shop for products and services",
        source: ""
      },
      {
        img: image1,
        name: "SpeedKash",
        subText: "Fintech Web App",
        link: "Live Project",
        cardText:
          "Enabling users save, take loan and shop for products and services",
        source: ""
      },
      {
        img: image1,
        name: "SpeedKash",
        subText: "Fintech Web App",
        link: "Live Project",
        cardText:
          "Enabling users save, take loan and shop for products and services",
        source: ""
      }
  ];
  return (
    <div className="projects js-scroll">
      <div className="heading">
        <p>Featured Projects</p>
        <hr />
      </div>
        <section className="myProjects">
      {projectcard.map((project, index)=>(
        <div className="project-card" key={index}>
        <img src={project.img}alt="" />
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
      ))}
      </section>
      
    </div>
  );
};

export default projects;
