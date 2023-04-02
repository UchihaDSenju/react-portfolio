import React from 'react'
import {FaBars} from 'react-icons/fa'
import {BsGithub, BsLinkedin} from 'react-icons/bs'
import '../styles/footer.css'

function Footer() {
  return (
    <footer>
        <div className='workLinks'>
            <a className='profile' href='#' target='_blank'><BsLinkedin /></a>
            <a className='profile' href='#' target='_blank'><BsGithub /></a>
        </div>
        <p> &copy; Anonymous 2023</p>
    </footer>
  )
}

export default Footer