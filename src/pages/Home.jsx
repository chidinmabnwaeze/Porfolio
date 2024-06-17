import React from "react";
import Header from "../components/Header";
import Projects from "../components/projects";
import wavingHand from "../assets/images/waving-hand.png"

const Home = () => {
  return (
    <div className="home">
        <Header/>
      <section className="hero">
        <h3>Welcome <img className="emoji" src={wavingHand} alt="" /></h3>
        <h1 className="name">
          I'm Nwogu Everistus Ugochukwu, a <br />
          <span>Backend Developer</span>
        </h1>
        <p className="intro">
           I am passionate about improving the lives of others through design and
          constantly looking to learn new things everyday. I also discuss about
          tech and designs on Ticktok.
        </p>
        <button className="CTA">Send message <img src="" alt="" /></button>
      </section>

      <Projects/>
    </div>
  );
};

export default Home;
