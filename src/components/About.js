.// About.js
import React from 'react';
import './About.css';
import {
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBullseye,
} from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>

        <div className="info-row fade-delay-1">
          <div className="label">
            <FaGraduationCap className="icon" />
            <span>Degree Completed:</span>
          </div>
          <div className="value">
           M.SC-Computer Science, Namakkal Kavingnar Ramalingam Arts & Science College for Women-Namakkal
          </div>
        </div>

        <div className="info-row fade-delay-2">
          <div className="label">
            <FaUniversity className="icon" />
            <span>University:</span>
          </div>
          <div className="value">Periyar University, Salem</div>
        </div>

        <div className="info-row fade-delay-3">
          <div className="label">
            <FaCertificate className="icon" />
            <span>Course Completed:</span>
          </div>
          <div className="value">
            MERN Full Stack Development -@SDLC - Namakkal
          </div>
        </div>

        <div className="info-row fade-delay-4">
          <div className="label">
            <FaBullseye className="icon" />
            <span>Goal:</span>
          </div>
          <div className="value">
            To become a creative and efficient Full Stack Developer with expertise in building responsive, user-friendly web applications using the MERN stack. I aim to work in a collaborative environment, continuously upskill, and contribute to impactful real-world projects.
          </div>
        </div>

        <div className="info-row fade-delay-5">
          <div className="label">
            <FaBullseye className="icon" />
            <span>Open to Work:</span>
          </div>
          <div className="value green">
            Actively seeking opportunities as a Junior Full Stack Developer (MERN Stack)
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
