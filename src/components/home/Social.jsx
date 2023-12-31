import { GithubLogo,LinkedinLogo } from "@phosphor-icons/react";
import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/rafaela-miranda/" className="home__social-icon" target="_blank" rel="noreferrer" title="Linkedin">
        <LinkedinLogo size={30}/>
      </a>

      <a href="https://github.com/rafaelamiranda" className="home__social-icon" target="_blank" rel="noreferrer" title="Github">
        <GithubLogo  size={30}/>
      </a>
    </div>
  )
}

export default Social