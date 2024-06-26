import React from "react";
import org1 from "../assets/images/Frame 561.png";

export default function Brands() {
  const Org = [
    {
      img: org1,
    },
    {
        img: org1,
      },
      {
        img: org1,
      },
      {
        img: org1,
      },
  ];

  return (
    <div className="brands">
      <div className="heading">
        <p>Some Organizations I've worked with</p>
        <hr />
      </div>
      <div className="orgLogo">
      {Org.map((org, index) => (
        <div className="orgs" key={index}>
          <img className="org" src={org.img} alt="" />
        </div>
      ))}
      </div>
    </div>
  );
}
