import React from 'react'
import '../styles/techStack.css'

function techStack({icon, name}) {
  return (
    <>
        <div className='tech-card'>
          <div className='tech-icon'>{icon}</div>
          <p className='tech-name'>{name}</p>
        </div>
    </>
  )
}

export default techStack