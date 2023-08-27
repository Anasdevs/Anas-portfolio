import React from "react";
import './Home.css'
import themeButton from './sun-line.png'
import anasImage2 from './anasImage7.png'
import linkedin from './linkedin.svg'
import github from './github.svg'
import instagram from './instagram.svg'
import arrowdown from './arrowdown.svg'
import Skills from "./Skills";
import Projects from "./Projects";



export default function Home(){
    return(
        <div className="main">
            <div className="upperContainer">

        <div className="header">

        <div className="myName">
        <h2>Anas</h2>
        </div>
        <div className="themeIcon">
                <img src={themeButton} alt="Theme Button" />
        </div>
        </div>
        <div className="myInfo">
            <h4>Hi, I'm</h4>
            <h2>Anas Saifi</h2>
            <h4>Web Developer</h4>
        </div>
        <div className="twoButtons">
            <button className="download-cv">Download CV</button>
            <button className="about-me">About Me</button>
        </div>
            </div>

        <div className="midContainer">
        <div className="navbar">
            <ul>
                <li><img src={linkedin} alt="" /></li>
                <li><img src={github} alt="" /></li>
                <li><img src={instagram} alt="" /></li>
            </ul>
        </div>
        <div className="myImage">
            <img src={anasImage2} alt="" />
        </div>
       
        <div className="scrollInfo">
        <span> <p> 
                Scroll Down <img src={arrowdown} alt="" /> </p></span>
        </div>
        </div>
        <Skills/>
        <Projects/>
        </div>
);
}