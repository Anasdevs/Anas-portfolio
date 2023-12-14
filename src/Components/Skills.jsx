import React from 'react';
import './Skills.css';
import htmlImg from './Images/html.png'
import cssImg from './Images/css.png'
import bootstrapImg from './Images/bootstrapImg.png'
import javascriptImg from './Images/javascript.svg'
import reactImg from './Images/react.png'
import nextImg from './Images/nextjs.png'
import djangoImg from './Images/django.png'
import nginxImg from './Images/nginx.png'
import mysqlImg from './Images/mysql.png'
import wordpressImg from './Images/wordpress.png'
import pythonImg from './Images/python.png'
import javaImg from './Images/javaImg.svg'
import googlecloudImg from './Images/googleCloud.svg'
import gitImg from './Images/gitImg.svg'
import githubImg from './Images/githubb.png'
import apiImg from './Images/api.png'
import aws from './Images/aws.svg'
import postman from './Images/postmanicon.svg'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function Skills() {
  const skillsData = [
    { image: htmlImg, title: 'HTML' },
    { image: cssImg, title: 'CSS' },
    { image: bootstrapImg, title: 'Bootstrap' },
    { image: javascriptImg, title: 'JavaScript' },
    { image: reactImg, title: 'ReactJS' },
    { image: nextImg, title: 'Next.js' },
    { image: djangoImg, title: 'Django' },
    { image: postman, title: 'Postman'},
    { image: mysqlImg, title: 'MySql' },
    { image: nginxImg, title: 'Nginx' },
    { image: wordpressImg, title: 'Wordpress' },
    { image: gitImg, title: 'Git' },
    { image: githubImg, title: 'GitHub' },
    { image: pythonImg, title: 'Python' },
    { image: javaImg, title: 'Java' },
    { image: googlecloudImg, title: 'Cloud' },
    { image: aws, title: 'AWS' },

  ];

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <div className="skills-main">
      <motion.h1
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        My Skillset
      </motion.h1>
      <div className="skills-container">
        <div className="skills">
          {skillsData.map((skill, index) => (
            <motion.div
              className={`skill skill-${index}`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.10 }}
            >
              <div className="skill-content">
                {skill.image && <img src={skill.image} alt="" />}
                {skill.title && <h3 className="skill-title">{skill.title}</h3>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}