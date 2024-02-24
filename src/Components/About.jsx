import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import anasImage8 from './Images/anasImage8.jpg';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <Element name="about" className="about-main">
            <h1>About Me</h1>
            <div className="about-main-component">
                <div className='about-content'>
                    <div className="about-image">
                        <motion.img
                            ref={ref}
                            src={anasImage8}
                            alt="image"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className='about-text'>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            I'm a web developer proficient in{" "}
                            <span className="colored-p">
                                ReactJS, NextJS, JavaScript, HTML, CSS, Django & MySQL.{" "}
                            </span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            I've created numerous projects like{" "}
                            <span className="colored-p">AMS, Stockflow, Shorty, Shaders etc. </span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            Also I am a remarkably fast typist, with an average speed of{" "}
                            <span className="colored-p">120 WPM.</span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            Along with that I'm also a Winner of {" "} <span className="colored-p">Smart India Hackathon (SIH) 2023</span>.
                        </motion.p>
                    </div>
                </div>
            </div>
        </Element>
    );
}
