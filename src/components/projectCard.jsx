import React from 'react'
// import '../styles/projectCard.css'

function projectCard({img, name}) {
  return (
    <>
        <div className='card-container'>
            <div className='img-container'>
                <img src={img}></img>
            </div>
            <p>{name}</p>
        </div>
    </>
  )
}

export default projectCard