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
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=css" alt="CSS logo" />
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript logo" />
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=react" alt="React logo" />
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind logo" />
            </div>

            <div className="about__stack-data">
              <img src="https://skillicons.dev/icons?i=php" alt="PHP logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack