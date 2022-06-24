import React from "react";
import './Experience.css';
import react from "../../images/react.svg";
import js from "../../images/js.png";
import css from "../../images/css.svg";
import html from "../../images/html.svg";
import firebase from "../../images/firebase.png";
import ExperienceCard from "./ExperienceCard/ExperienceCard";

export default function Experience(){
    const statements =[
        "1. vvjvjrvjernvjnrvjnj",
        "2. vnvrnnrvnrvnrjvnrvnjn",
        "3. vjjvnrjvnvfvjfvjnfjvnf",
        "4. dvjnfvjnfvjnfvjnfvnfjvnf",
    ];

    const iconImages =[react, js, css, html];
    const iconImages2 =[css, react, js, firebase];

    return (
        <div className="experience_container">
            <p className="experience_title">Experience</p>
            <div className="experience_card_container">
                <ExperienceCard
                companyName="Amazon"
                designation="CEO"
                statements={statements}
                iconImages={iconImages}
                />
                 <ExperienceCard
                companyName="Tesla"
                designation="CEO"
                statements={statements}
                iconImages={iconImages2}
                />
            
               
            </div>
        </div>
    );

}