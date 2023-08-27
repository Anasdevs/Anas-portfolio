import React from 'react';
import './Projects.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import project1Screenshot from './Images/css.png'; 
import ams from './Images/ams.png';
import filedownloaderImg from './Images/filedownloader.png'
import shaders from './Images/shaders.png'
import textutils from './Images/textutils.png'
import githubImg from './github.svg';
import reactImg from './Images/react.png'
import djangoImg from './Images/django.png'
import mysqlImg from './Images/mysql.png'
import wordpressImg from './Images/wordpress.png'


// Define a mapping between tech names and their corresponding images
const techImages = {
  'React': reactImg, // Replace with the actual path to the image
  'Django': djangoImg, // Replace with the actual path to the image
  'MySql': mysqlImg,
  'Wordpress': wordpressImg, // Replace with the actual path to the image

};

const projectsData = [
  {
    title: 'Attendance Management System',
    description: 'The Attendance Management System has been specifically designed to automate and streamline the attendance management process. It offers a digital platform that efficiently records, monitors, and analyzes student attendance data, replacing the traditional manual methods currently in use.',
    techUsed: ['React', 'Django', 'MySql'],
    githubLink: 'https://github.com/yourusername/project1',
    screenshot: ams,
  },
  {
    title: 'Shaders.shop',
    description: 'Shaders.shop is a dynamic e-commerce platform meticulously crafted using the power of WordPress and WooCommerce. As an innovative online destination, it stands as a showcase of both modern design aesthetics and seamless functionality.',
    techUsed: ['Wordpress'],
    githubLink: 'https://github.com/yourusername/project1',
    screenshot: shaders,
  },
  {
    title: 'File Downloader',
    description: "File Downloader is a simple web application that allows users to download files from a given URL. It provides an easy way to download files directly by pasting the desired URL into the input field. The downloaded file will be saved to your device's default download location.",
    techUsed: ['Wordpress'],
    githubLink: 'https://github.com/yourusername/project1',
    screenshot: filedownloaderImg,
  },
  {
    title: 'TextUtils',
    description: 'The Attendance Management System has been specifically designed to automate and streamline the attendance management process. It offers a digital platform that efficiently records, monitors, and analyzes student attendance data, replacing the traditional manual methods currently in use.',
    techUsed: ['React'],
    githubLink: 'https://github.com/yourusername/project1',
    screenshot: textutils,
  }
];

export default function Projects() {
    return (
      <div className="projects-main">
        <h1>
          My <span className="colored-text">Projects</span>
        </h1>
        <div className="project-grid-main">
          <div className="projects-grid">
           <Slider
            infinite={true}
            slidesToShow={3} // Number of projects to show at a time
            slidesToScroll={1}
            nextArrow={<div className="slick-arrow next-arrow"></div>}
            prevArrow={<div className="slick-arrow prev-arrow"></div>}
            autoplay={true} // Auto-moving animation
            autoplaySpeed={1000} // Delay between slides in milliseconds
            pauseOnHover={true} // Pause animation on hover
          >
              {projectsData.map((project, index) => (
                <div className="project-card" key={index}>
                  <img src={project.screenshot} alt={`Screenshot of ${project.title}`} />
                  <hr />
                  <h2>{project.title}</h2>
                  <div className="tech-stack">
                    <p>Tech Stack:</p>
                    {project.techUsed.map((tech, index) => (
                      <img key={index} src={techImages[tech]} alt={tech} className="tech-icon" />
                    ))}
                  </div>
                  <p>{project.description}</p>
                  <hr />
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    <img src={githubImg} alt="GitHub" />
                    GitHub
                  </a>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
  