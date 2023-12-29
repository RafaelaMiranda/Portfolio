import React from "react";

const Projects = () => {
  return (
    <div className="projects__content">
      <h3 className="projects__title">Projetos</h3>
      <div className="projects__grid">
        <div  className="pro pro__1">
          <div  className="pro__img">
            <a target="_blank" href="" rel="noreferrer">
              <img src="" alt="website"/>
            </a>
          </div>
          <div  className="pro__text">
            <h3>Título</h3>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit porttitor ex vel suscipit. Suspendisse sit amet ex non sapien fringilla tristique non laoreet turpis.
            </p>
            <div className="stack">
              <p>Stack 01</p>
              <p>Stack 02</p>
            </div>
            <div className="links">
              <a target="_blank" href="" rel="noreferrer">Código 
                <i className="uil uil-github-alt"></i>
              </a>
              <a target="_blank" href="" rel="noreferrer">Demo
                <i className="uil uil-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>

        <div  className="pro pro__1">
          <div  className="pro__img">
            <a target="_blank" href="" rel="noreferrer">
              <img src="" alt="website"/>
            </a>
          </div>
          <div  className="pro__text">
            <h3>Título</h3>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit porttitor ex vel suscipit. Suspendisse sit amet ex non sapien fringilla tristique non laoreet turpis.
            </p>
            <div className="stack">
              <p>Stack 01</p>
              <p>Stack 02</p>
            </div>
            <div className="links">
              <a target="_blank" href="" rel="noreferrer">Código 
                <i className="uil uil-github-alt"></i>
              </a>
              <a target="_blank" href="" rel="noreferrer">Demo
                <i className="uil uil-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects