import React from 'react'
import '../styles/Home.css'
import Profile from '../assets/profile.png'
import { techStacks } from '../helpers/techStacks'
import TechStack from '../components/techStack'

function Home() {
  return (
    <>
        <div className='about-container'>
            <div className='about'>
                <h1>Hi I'm Mohamed Tariq</h1>
                <p>A passionate Full Stack Software Developer having experience of building web and mobile applications using HTML/CSS/JavaScript/Reactjs using cool libraries and frameworks</p>
            </div>
            <div className='profile-photo'>
                <div><img src={Profile}></img></div>
            </div>
        </div>

        <div className='about-container'>
            <div>
                <ul className='tech-stacks'>
                    {techStacks.map((tech) => {
                        return(
                            <li className='tech' key={tech.name}>
                                <TechStack icon={tech.icon} name={tech.name} />
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className='about'>
                <h1>What I do ?</h1>
                <ul>
                    <li>
                        CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY STACK
                    </li>
                    <li>
                        Obsessed with trying out new technologies in the field of computer Science
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Home