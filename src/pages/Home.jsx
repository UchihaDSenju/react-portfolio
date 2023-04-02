import React from 'react'
import '../styles/Home.css'
import Profile from '../assets/profile.png'

function Home() {
  return (
    <>
        <div className='about-container'>
            <div className='about'>
                <h1>Hi I'm Mohamed Tariq</h1>
                <p>A passionate Full Stack Software Developer having experience of building web and mobile applications using HTML/CSS/JavaScript/Reactjs using cool libraries and frameworks</p>
            </div>
            <div className='profile-photo'>
                <div>
                    <div><img src={Profile}></img></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home