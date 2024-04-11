import React from "react";
import './Projects.css';
import ProjectBox from './ProjectBox/ProjectBox';
import netflix_clone from '../../images/netflix_clone.png';
import todoapp from '../../images/todoapp.png';

export default function Projects(){
     const projectData = [
        {
            iconImage: netflix_clone,
            title:'Netflix Clone',
            sentences: [
                
                " Technologies - Reactjs, JavaScript, HTML, CSS",
                
            ],
            link: 'https://netflix-clone-navneek.netlify.app/'
        },
        {
            iconImage: todoapp,
            title:'ToDo App',
            sentences: [
                "Technologies - Reactjs, JavaScript, HTML, CSS",
            ],
            link: 'https://navneek-todo-app.netlify.app/'
        },
     ];

     return (
        <div className="projects_box_maincontainer">
            <p className="projects_title">Projects</p>
            <div className="projects_box_container">
                {projectData.map((value, index)=>(
                   <ProjectBox
                    title ={value.title}
                    image={value.iconImage}
                    sentences ={value.sentences}
                    link ={value.link}

                   /> 
                )
                )}
            </div>
        </div>
     );
}