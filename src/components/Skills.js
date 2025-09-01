import React from 'react';
import './Skills.css';

const frontendSkills = [
  "HTML5",
  "CSS3",
  "Bootstrap",
  "JavaScript",
  "JSON",
  "jQuery",
  "ReactJS",
];

const backendSkills = [
  "MongoDB",
  "ExpressJS",
  "MySQL",
  "NodeJS",
  "REST API",
];

const toolsSkills = [
  "Git",
  "GitHub",
  "Visual Studio Code",
];

const otherSkills = [
  "Python (Basics)",
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills Chart</h2>
      <p className="skills-subtitle">Technologies I have learned so far</p>

      <div className="skills-cards">
        {/* Frontend Card */}
        <div className="skills-card">
          <h3 className="card-title">Frontend</h3>
          <ul className="skills-list">
            {frontendSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Backend Card */}
        <div className="skills-card">
          <h3 className="card-title">Backend</h3>
          <ul className="skills-list">
            {backendSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Tools & Other Card */}
        <div className="skills-card">
          <h3 className="card-title">Tools</h3>
          <ul className="skills-list">
            {toolsSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h3 className="card-title">Other</h3>
          <ul className="skills-list">
            {otherSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
