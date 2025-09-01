.// Home.js
import React from 'react';
import './Home.css';
import { FaDownload } from 'react-icons/fa';
import profileImage from '../images/profile image.jpeg'; // ✅ your image

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        {/* Profile image left */}
        <div className="profile-container">
          <img src={profileImage} alt="Akshaya" className="profile-image" />
        </div>

        {/* Text right */}
        <div className="text">
          <h1 className="greeting">Hi, I'm <span>Akshaya</span></h1>
          <p className="role">Full Stack Developer - MERN</p>
         <a
  href={`${process.env.PUBLIC_URL}/Akshaya_Resume.pdf`}
  download
  className="download-btn"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaDownload className="download-icon" />
  Download CV
</a>

        </div>
      </div>
    </section>
  );
}

export default Home;
