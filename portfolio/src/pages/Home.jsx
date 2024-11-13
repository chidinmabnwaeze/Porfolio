import React from "react";
import Header from "../components/Header";
import Projects from "../components/projects";
import wavingHand from "../assets/images/waving-hand.png";
import Shots from "../components/shots";
import Youtube from "../components/Youtube";
import OpenSource from "../components/openSource";
import Brands from "../components/brands";
import Findme from "../components/findMe";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="hero">
        <p className="welcome">
          Welcome <img className="emoji" src={wavingHand} alt="" />
        </p>
        <p className="name">
          I'm Nwaeze Chidinma Blessing, a a <br />
          <span className="role">Frontend Developer</span>
        </p>
        <p className="intro">
          I am passionate about improving the lives of others through design and
          constantly looking to learn new things everyday. I also discuss about
          tech and designs on Ticktok.
        </p>
        <button className="CTA">
          Send message <img src="" alt="" />
        </button>
      </section>

      <Projects />
      <Shots />
      <Youtube />
      <OpenSource />
      <Brands />
      <Findme />
      <Footer/>
    </div>
  );
};

export default Home;
