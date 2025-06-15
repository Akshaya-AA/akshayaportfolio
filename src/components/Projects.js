// Projects.js
import React from 'react';
import './Projects.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Projects() {
  const projects = [
    {
      title: 'Travel Website',
      desc: 'Created a responsive travel website with HTML & CSS, featuring destination and packages sections, animations, hover effects, and a mobile-friendly design.',
      tech: 'HTML5 | CSS3',
      liveLink: 'https://akshaya-aa.github.io/travelwebsite/',
      codeLink: 'https://github.com/Akshaya-aa/travelwebsite',
      img: require('../images/project1.jpg'),
    },
    {
      title: 'Garden Website',
      desc: 'Developed a responsive Garden Website using HTML, CSS, Bootstrap and JavaScript, featuring plant collections, gardening tools, an “Add to Cart” feature, animations and seamless mobile navigation.',
      tech: 'HTML5 | CSS3 | Bootstrap | JavaScript',
      liveLink: 'https://akshaya-aa.github.io/Garden-Website/',
      codeLink: 'https://github.com/Akshaya-aa/Garden-Website',
      img: require('../images/project2.jpg'),
    },
    {
      title: 'Diet Food Website',
      desc: 'Developed a responsive diet food website in React with dynamic meal planning, React Hooks for State management, animations and mobile-friendly design using CSS and Bootstrap.',
      tech: 'ReactJs',
      liveLink: 'https://akshaya-aa.github.io/Dietify/',
      codeLink: 'https://github.com/Akshaya-aa/Dietify',
      img: require('../images/project3.jpg'),
    },
    {
      title: 'MySQL CRUD Project',
      desc: 'Developed a CRUD application with MySQL (Railway) for efficient data management and dynamic post listing. Deployed the server on Render, enabling seamless Edit and Delete functionalities with real-time update.',
      tech: 'MySQL',
      liveLink: ' https://akshaya-aa.github.io/MySQL-CRUD-Project/',
      codeLink: 'https://github.com/Akshaya-AA/MySQL-CRUD-Project',
      img: require('../images/project5.jpeg'),
    },
    {
      title: 'Beauty Parlour Website',
      desc: 'Askayra Beauty Parlour Website is a full-stack, responsive web application built with React.js, Node.js, Express.js, and MongoDB. Includes 8 pages with animations, sliders, booking system, and EmailJS integration.',
      tech: 'MongoDB | ReactJs | ExpressJs | NodeJs',
      liveLink: 'https://akshaya-aa.github.io/Askayra-Client/',
      codeLink: 'https://github.com/Akshaya-aa/Askayra-Client',
      img: require('../images/project4.jpg'),
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-subtitle">Some of my featured works with live demos</p>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <img src={project.img} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.desc}</p>
                <p className="project-tech">Using: {project.tech}</p>
                <div className="project-buttons">
                  <a href={project.liveLink} className="project-btn" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.codeLink} className="project-btn" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
