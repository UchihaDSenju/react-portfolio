import React, {useRef} from 'react'
import {FaBars} from 'react-icons/fa'
import '../styles/navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {

  const navPane = useRef(null);

  const barClick = () => {
    navPane.current.classList.toggle('show');
  }


  return (
    <>
        <nav className='nav-bar'>
          <button onClick={barClick} className='bars'>
              <FaBars />
          </button>

          <ul ref={navPane}>
              <li><NavLink to={'/react-portfolio/'}>Home</NavLink ></li>
              <li><NavLink to={'/react-portfolio/projects'}>Projects</NavLink ></li>
              <li><NavLink to={'/react-portfolio/experience'}>Experience</NavLink ></li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar