// Skills.js
import React from 'react';
import './Skills.css';

const frontendSkills = [
  { name: 'HTML5', percent: 90 },
  { name: 'CSS3', percent: 85 },
  { name: 'Bootstrap', percent: 80 },
  { name: 'JavaScript', percent: 85 },
  { name: 'JSON', percent: 75 },
  { name: 'jQuery', percent: 70 },
  { name: 'ReactJS', percent: 85 },
];

const backendSkills = [
  { name: 'MongoDB', percent: 80 },
  { name: 'ExpressJS', percent: 75 },
  { name: 'MySQL', percent: 70 },
  { name: 'NodeJS', percent: 80 },
  { name: 'REST API', percent: 85 },
  { name: 'Python(Basics)', percent: 50 },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills Chart</h2>
      <p className="skills-subtitle">Technologies I have learned so far</p>

      <div className="skills-container">
        <div className="skills-column">
          <h3 className="column-title">Frontend</h3>
          {frontendSkills.map((skill, index) => (
            <div className="skill-bar fade" style={{ animationDelay: `${index * 0.2}s` }} key={skill.name}>
              <label>{skill.name}</label>
              <div className="bar">
                <div
                  className="bar-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-column">
          <h3 className="column-title">Backend</h3>
          {backendSkills.map((skill, index) => (
            <div className="skill-bar fade" style={{ animationDelay: `${index * 0.2}s` }} key={skill.name}>
              <label>{skill.name}</label>
              <div className="bar">
                <div
                  className="bar-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
