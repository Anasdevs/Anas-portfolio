import React from "react";
import './Navbar.css'
import themeButton from './sun-line.png'

export default function Navbar(){
    return(
        <div className="main">
        <div className="header">

        <div className="myName">
        <h2>Anas</h2>
        </div>
        <div className="themeIcon">
                <li><img src={themeButton} alt="Theme Button" /></li>
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

        {/* <div className="navbar">
            <ul>
                <li>Home</li>
                <li>About me</li>
                <li>Contact</li>
            </ul>
        </div> */}
        </div>

);
}