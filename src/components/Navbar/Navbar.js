import React from "react";
import './Navbar.css';


var name= '<NS/>'
function Navbar(){


    return (
        <div className="navbar_container">
            <div className="navbar_left">{name}</div>
            <div className="navbar_right">
            <p>About</p>
            <p><a href="#TechStack">Tools</a></p>
            {/*<p>Experience</p>*/}
            <p><a href="#projects">Projects</a></p>
            <p>Resume</p>
            </div>
            
        </div>
    );

}
export default Navbar;