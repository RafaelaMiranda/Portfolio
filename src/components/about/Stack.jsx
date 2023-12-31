import React from "react";
import './about.css';

const Stack = () => {
  return (
    <div className="about__stack">
      <div className="about__stack-container">
        <div className="about__stack-box">
          <h3 className="about__stack-title">Stack</h3>
          <div className="about__stack-group">
            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=html" alt="HTML logo" />
              <span>HTML</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=css" alt="CSS logo" />
              <span>CSS</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript logo" />
              <span>JavaScript</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=react" alt="React logo" />
              <span>React</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=vite" alt="Vite logo" />
              <span>Vite</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind logo" />
              <span>Tailwind</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=php" alt="PHP logo" />
              <span>PHP</span>
            </div>

  
          </div>
        </div>

        <div className="about__stack-box about__stack-box-2">
          <h3 className="about__stack-title">Ferramentas</h3>
          <div className="about__stack-group">
            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=vscode" alt="VS Code logo" />
              <span>VS Code</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=figma" alt="Figma logo" />
              <span>Figma</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=vercel" alt="Vercel logo" />
              <span>Vercel</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=git" alt="Git logo" />
              <span>Git</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=github" alt="Github logo" />
              <span>Github</span>
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=docker" alt="Docker logo" />
              <span>Docker</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack