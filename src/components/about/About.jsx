import React from "react";
import './about.css';
import Stack from "../about/Stack";
import Data from "../about/Data";

const About = () => {
  return (
    <section id="sobre">
      <div className="home__container container grid">
        <div className="grid">
          <Stack />
          <Data />
        </div>
      </div>
    </section>
  )
}

export default About