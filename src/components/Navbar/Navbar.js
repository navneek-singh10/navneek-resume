import React from "react";
import './Navbar.css';


var name= '<NS/>'
function Navbar(){


    return (
        <div className="navbar_container">
            <div className="navbar_left">{name}</div>
            <div className="navbar_right">
            <p><a href="#about">About</a></p>
            <p><a href="#TechStack">Tools</a></p>
            {/*<p>Experience</p>*/}
            <p><a href="#projects">Projects</a></p>
            <p><a href="https://drive.google.com/file/d/1TC1swyqFnvi8HGeA27FVIScDy1fuXUqr/view?usp=drive_link" target={"_blank"}>Resume</a></p>
            </div>
            
        </div>
    );

}
export default Navbar;