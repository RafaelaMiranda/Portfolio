import React from "react";
import './projects.css';
import Data from "../projects/Data";

const Projects = () => {
  return (
    <section id="projetos">
      <div className="home__container container grid">
        <Data />
        </div>
    </section>
  )
}

export default Projects