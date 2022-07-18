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
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
                "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
            ],
            link: 'https://netflix-clone-navneek.netlify.app/'
        },
        {
            iconImage: todoapp,
            title:'ToDo App',
            sentences: [
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores",
                "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum",
            ],
            link: 'https://todolist-app-navneek.herokuapp.com/'
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