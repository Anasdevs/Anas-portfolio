import React from 'react';
import './Skills.css';
import htmlImg from './Images/html.png'
import cssImg from './Images/css.png'
import bootstrapImg from './Images/bootstrap.png'
import javascriptImg from './Images/javascript.png'
import reactImg from './Images/react.png'
import nextImg from './Images/nextjs.png'
import djangoImg from './Images/django.png'
import nginxImg from './Images/nginx.png'
import mysqlImg from './Images/mysql.png'
import wordpressImg from './Images/wordpress.png'
import pythonImg from './Images/python.png'
import javaImg from './Images/java.png'
import googlecloudImg from './Images/googlecloud.png'
import gitImg from './Images/git.png'
import githubImg from './Images/githubb.png'
import apiImg from './Images/api.png'



export default function Skills() {
  const skillsData = [
    { image: htmlImg, title: 'HTML' },
    { image: cssImg, title: 'CSS' },
    { image: bootstrapImg, title: 'Bootstrap'},
    { image: javascriptImg, title: 'JavaScript' },
    { image: reactImg, title: 'ReactJS' },
    { image: nextImg, title: 'Next.js' },
    { image: djangoImg, title: 'Django' },
    { image: apiImg, title: 'API' },
    { image: mysqlImg, title: 'MySql' },
    { image: nginxImg, title: 'Nginx'},
    { image: wordpressImg, title: 'Wordpress' },
    { image: gitImg, title: 'Git' },
    { image: githubImg, title: 'GitHub' },
    { image: pythonImg, title: 'Python' },
    { image: javaImg, title: 'Java' },
    { image: googlecloudImg, title: 'Cloud' },
  ];

  
  return (
    <div className="skills-main">
      <h1>Skills</h1>
      <div className="skills-container">
        <div className="skills">
          {skillsData.map((skill, index) => (
            <div className={`skill skill-${index}`} key={index}>
              <div className="skill-content">
                {skill.image && <img src={skill.image} alt="" />}
                {skill.title && <h3 className="skill-title">{skill.title}</h3>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
