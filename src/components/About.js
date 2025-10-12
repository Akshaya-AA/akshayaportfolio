import React from "react";
import "./About.css";
import {
  FaGraduationCap,
  FaUniversity,
  FaCertificate,
  FaBullseye,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  const infoRows = [
    {
      icon: <FaGraduationCap className="icon" />,
      label: "Degree Completed",
      value:
        "M.SC-Computer Science, Namakkal Kavingnar Ramalingam Arts & Science College for Women-Namakkal",
    },
    {
      icon: <FaUniversity className="icon" />,
      label: "University",
      value: "Periyar University, Salem",
    },
    {
      icon: <FaCertificate className="icon" />,
      label: "Course Completed",
      value: "MERN Full Stack Development - @SDLC - Namakkal",
    },
    {
      icon: <FaBullseye className="icon" />,
      label: "Goal",
      value:
        "To become a creative and efficient Full Stack Developer with expertise in building responsive, user-friendly web applications using the MERN stack. I aim to work in a collaborative environment, continuously upskill, and contribute to impactful real-world projects.",
    },
    {
      icon: <FaLaptopCode className="icon" />,
      label: "Open to Work",
      value:
        "Actively seeking opportunities as a Junior Full Stack Developer (MERN Stack)",
      highlight: true,
    },
  ];

  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <div className="timeline-container">
        {infoRows.map((row, index) => (
          <div
            key={index}
            className={`timeline-item ${
              index % 2 === 0 ? "left" : "right"
            } fade-in`}
          >
            <div className="timeline-icon">{row.icon}</div>
            <div className={`timeline-content ${row.highlight ? "highlight" : ""}`}>
              <h3>{row.label}</h3>
              <p>{row.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
