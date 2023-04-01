import React, {useRef} from 'react'
import {FaBars} from 'react-icons/fa'

function Navbar() {

  const bars = useRef(null);
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
              <li><a href=''>Home</a ></li>
              <li><a href=''>Projects</a ></li>
              <li><a href=''>Experience</a ></li>
          </ul>
        </nav>
    </>
  )
}

export default Navbar