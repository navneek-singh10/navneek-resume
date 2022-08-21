import React from "react";
import './Homepage.css';
import github from '../../images/github.png';
import linkedIn from '../../images/linkedIn.png';

function Homepage(){
    return (
        <div className="homepage_container" id="about">
        <div className="homepage_left">
        <p className="homepage_left_h1"><span className="red_color">Hi, </span>my name is</p>
        <p className="homepage_left_h2">Navneek Singh.</p>
       <p className="homepage_left_h3">B.tech CSE student at <span className="red_color_h3">Lovely Professional University</span></p>
        <p className="homepage_left_description">I am a third year student currently working on Full Stack Web Development     </p>
        <div>
            <a href="https://github.com/navneek-singh10" target="_blank"><img src={github} alt="githubimage" className="homepage_logo"/></a> 
            <a href="https://www.linkedin.com/in/navneek-singh-0330851b7/" target="_blank"><img src={linkedIn} alt="linkedinimage" className="homepage_logo"/></a>
        </div>
        <a href="mailto:navdoad01@gmail.com">
            <button className="homepage_left_button">Get in Touch</button>
             </a>
        </div>
        {/*<div className="homepage_right">
        <img src="https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif" alt="GIF"/>
        </div>
*/}
        </div>
    );

}

export default Homepage

