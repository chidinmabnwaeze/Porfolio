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
import { observer } from "../components/scroll";

const Home = () => {
  observer;
  return (
    <>
      <Header />
      <main className="home js-scroll">
        <section className="hero">
          <p className="welcome">
            Welcome <img className="emoji" src={wavingHand} alt="" />
          </p>
          <p className="name">
            I'm Nwaeze Chidinma Blessing, a <br />
            <span className="role">Frontend Developer</span>
          </p>
          <p className="intro">
            A passionate web developer. Competent in a range of programming
            languages including HTML, CSS and JavaScript. Eager to expand on
            experience in software development. Highly motivated, hardworking
            and friendly person with strong organizational and time management
            skills. Eager to support and learn from development teams to deliver
            well-designed mobile and web applications.
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
        <Footer />
      </main>
    </>
  );
};

export default Home;
