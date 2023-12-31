import React from "react";
import { GithubLogo, Code } from "@phosphor-icons/react"

const Data = () => {
  return (
    <div className="projects__content">
      <h3 className="projects__title">Projetos</h3>
      <div className="projects__grid">
        <div className="pro pro__1">
          <div className="pro__img">
            <a target="_blank" href="#" rel="noreferrer">
              <img src="https://via.placeholder.com/600x336" alt="website"/>
            </a>
          </div>
          <div className="pro__text">
            <h3>Título</h3>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit porttitor ex vel suscipit. Suspendisse sit amet ex non sapien fringilla tristique non laoreet turpis.
            </p>
            <div className="stack">
              <p>Stack 01</p>
              <p>Stack 02</p>
            </div>
            <div className="links">
              <a target="_blank" href="#" rel="noreferrer">
                Código 
                <GithubLogo size={24} />
              </a>
              <a target="_blank" href="#" rel="noreferrer">
                Demo
                <Code size={24} />
              </a>
            </div>
          </div>
        </div>

        <div  className="pro pro__1 reversed-proj">
          <div  className="pro__img">
            <a target="_blank" href="#" rel="noreferrer">
              <img src="https://via.placeholder.com/600x336" alt="website"/>
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
              <a target="_blank" href="#" rel="noreferrer">
                Código 
                <GithubLogo size={24} />
              </a>
              <a target="_blank" href="#" rel="noreferrer">
                Demo
                <Code size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="pro pro__1">
          <div className="pro__img">
            <a target="_blank" href="#" rel="noreferrer">
              <img src="https://via.placeholder.com/600x336" alt="website"/>
            </a>
          </div>
          <div className="pro__text">
            <h3>Título</h3>
            <p> 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit porttitor ex vel suscipit. Suspendisse sit amet ex non sapien fringilla tristique non laoreet turpis.
            </p>
            <div className="stack">
              <p>Stack 01</p>
              <p>Stack 02</p>
            </div>
            <div className="links">
              <a target="_blank" href="#" rel="noreferrer">
                Código 
                <GithubLogo size={24} />
              </a>
              <a target="_blank" href="#" rel="noreferrer">
                Demo
                <Code size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data