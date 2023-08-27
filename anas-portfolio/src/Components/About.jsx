import React from 'react';
import './About.css';
import anasImage8 from './anasImage8.jpg'; // Replace with your profile image

export default function About() {
    return (
        <div className='about-main'>
      <h1>About Me</h1>
    <div className="about-main-component">
      <div className='about-content'>
        <div className="about-image">
          <img src={anasImage8} alt="" />
          </div>
        <div className='about-text'>
          <p>
            I'm a web developer proficient in <span className="colored-p">ReactJS, NextJS, JavaScript, CSS, Django, MySQL, and Canva </span>.
          </p>
          <p>
            I've created numerous projects and worked with WordPress to develop projects like Shaders, an e-commerce platform, and nerdsflow, a dynamic blog site.
          </p>
          <p>
            One of my most influential accomplishments is the development of an Attendance Management System (AMS) for my college. This system allows teachers to take attendance, keep track of it, generate reports, and more. I architected this system by leveraging ReactJS on the frontend and Django on the backend.
          </p>
          <p>
            Apart from my technical prowess, I am a remarkably fast typist, with an average speed of 120 WPM and a personal record of 155 WPM.
          </p>
         
          <p>
            Feel free to get in touch and connect. I'm always eager to collaborate with fellow creators and innovators.
          </p>
        </div>
      </div>
        </div>
    </div>
  );
}
