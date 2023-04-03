import React from 'react'
import ProjectCard from '../components/projectCard'
import { projects } from '../helpers/projects'
import '../styles/projectCard.css'

function Projects() {
  return (
    <>
        <ul>
            {projects.map((project, index) => {
                return <li key={project.name}><ProjectCard index={index} img={project.img} name={project.name} /></li>
            })}
        </ul>
    </>
  )
}

export default Projects