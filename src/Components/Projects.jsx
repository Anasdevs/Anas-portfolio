import React from 'react';
import './Projects.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ams from './Images/ams.png';
import filedownloaderImg from './Images/filedownloader.png'
import shaders from './Images/shaders.png'
import textutils from './Images/textutils.png'
import githubImg from './Images/github.svg';
import reactImg from './Images/react.png'
import djangoImg from './Images/django.png'
import mysqlImg from './Images/mysql.png'
import wordpressImg from './Images/wordpress.png'
import htmlImg from './Images/html.png'
import cssImg from './Images/css.png'
import javascriptImg from './Images/javascript.png'

const techImages = {
  'React': reactImg,
  'Django': djangoImg,
  'MySql': mysqlImg,
  'Wordpress': wordpressImg,
  'Html': htmlImg,
  'CSS': cssImg,
  'Javascript': javascriptImg,

};

const projectsData = [
  {
    title: 'Attendance Management System',
    description: 'AMS has been specifically designed to automate and streamline the attendance management process. It offers a digital platform that efficiently records, monitors, and analyzes student attendance data, replacing the traditional manual methods currently in use.',
    techUsed: ['React', 'Django', 'MySql'],
    githubLink: 'https://github.com/anasdevs',
    screenshot: ams,
  },
  {
    title: 'Shaders.shop',
    description: 'Shaders.shop is a dynamic e-commerce platform meticulously crafted using the power of WordPress and WooCommerce. As an innovative online destination, it stands as a showcase of both modern design aesthetics and seamless functionality. ',
    techUsed: ['Wordpress'],
    githubLink: 'https://shaders.shop/',
    screenshot: shaders,
  },
  {
    title: 'File Downloader',
    description: "File Downloader is a simple web application that allows users to download files from a given URL. It provides an easy way to download files directly by pasting the desired URL into the input field. The downloaded file will be saved to your device's default download location.",
    techUsed: ['Html', 'CSS', 'Javascript'],
    githubLink: 'https://anasdevs.github.io/File-Downloader/',
    screenshot: filedownloaderImg,
  },
  {
    title: 'TextUtils',
    description: 'TextUtils provides you the facility of manipulating the entered text. You can easily convert your text to uppercase or lowercase. Now only this you can also remove the white spaces, copy text. It also tells you the time required to read the text. You can easily copy your modified text and use it.',
    techUsed: ['React'],
    githubLink: 'https://github.com/anasdevs',
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
            nextArrow={<div className="slick-arrow next-arrow"></div>}
            prevArrow={<div className="slick-arrow prev-arrow"></div>}
            autoplay={true}
            autoplaySpeed={1500}
            pauseOnHover={true}
            mobileFirst={true}
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
