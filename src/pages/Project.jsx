import React from 'react'
import ProjectCard from '../components/projectCard'
import { useParams } from 'react-router-dom'
import { projects } from '../helpers/projects';
import '../styles/project.css'

function Project() {
    const id = useParams();
    const project = projects[id.id];
  return (
    <>
        <div className='project-container'>
            <img src={project.img}></img>
            <h1>{project.name}</h1>
            <h3>skills <br></br> {project.techSet}</h3>
        </div>

    </>
  )
}

export default Project