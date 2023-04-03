import React from 'react'
import { useNavigate } from 'react-router-dom'

function projectCard({img, name, index}) {
  const navigate = useNavigate()
  return (
    <>
        <div className='card-container'>
            <div className='img-container'>
                <img src={img} onClick={() => navigate('/react-portfolio/projects/' + index)}></img>
            </div>
            <p>{name}</p>
        </div>
    </>
  )
}

export default projectCard