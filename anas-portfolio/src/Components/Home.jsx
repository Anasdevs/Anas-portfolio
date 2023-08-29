import { React, useState, useEffect } from "react";
import { motion } from 'framer-motion'; 
import { Link, Element } from "react-scroll";
import { useInView } from 'react-intersection-observer';
import './Home.css'
import themeButton from './Images/sun-line.png'
import anasImage2 from './Images/anasImage7.png'
import linkedin from './Images/linkedin.svg'
import github from './Images/github.svg'
import instagram from './Images/instagram.svg'
import arrowdown from './Images/arrowdown.svg'
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
    return (
        <div className="main">

            <motion.div
                className="header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <div className="upperContainer">

                <div className="header">
                    <div className="myName">
                        <h2>Anas</h2>
                    </div>
                    {/* <div className="themeIcon">
                        <img src={themeButton} alt="Theme Button" />
                    </div> */}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="myInfo"
                >
                    <h4>Hi, I'm</h4>
                    <h2>Anas Saifi</h2>
                    <h4>Web Developer</h4>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="twoButtons"
                >
                    <InViewAnimation>
                        <button className="download-cv">

                            <a
                                href="./Anas_Resume.pdf"
                                download="Anas_Resume.pdf"
                            >
                                Download CV
                            </a>
                        </button>

                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            <button className="about-me">About Me</button>
                        </Link>
                    </InViewAnimation>
                </motion.div>
            </div>

            <div className="midContainer">
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="navbar"
                >
                    <InViewAnimation>
                        <ul>
                            <li><a href="https://www.github.com/anasdevs" target="_blank">
                                <img src={github} alt="" /></a></li>
                            <li><a href="https://www.linkedin.com/in/anas-saifi-5359a125b" target="_blank">
                                <img src={linkedin} alt="" /></a></li>
                            <li><a href="https://www.instagram.com/anas.me8/" target="_blank">
                                <img src={instagram} alt="" /></a></li>
                        </ul>
                    </InViewAnimation>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="myImage"
                >
                    <InViewAnimation>
                        <img src={anasImage2} alt="" />
                    </InViewAnimation>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="scrollInfo"
                >
                    <span>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                        >
                            <p>Scroll Down <img src={arrowdown} alt="" /></p>
                        </Link>
                    </span>
                </motion.div>
            </div>
            <Element name="about">
                <About />
            </Element>
            <Element>
                <Skills />
            </Element>
            <Element>
                <Projects />
            </Element>
            <Element>
                <Contact />
            </Element>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
                <p>Developed with ❤️ by Anas</p>
            </footer>
        </div>
    );
}


function InViewAnimation({ children }) {
    const [ref, inView] = useInView({
        triggerOnce: false,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{ duration: 1 }}
        >
            {children}
        </motion.div>
    );
}