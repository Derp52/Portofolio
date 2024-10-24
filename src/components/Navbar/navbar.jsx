import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'


function navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      {/* Logo/Name Section */}
      <div className='flex items-center'>
        <h1 className='text-white'>DERP</h1>
      </div>

      {/* Social Icons Section */}
      <div className='flex items-center justify-center gap-4 text-2xl text-white relative z-10'>
        <a href="https://www.linkedin.com/in/david-ezra-prasetyo-43007494/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
        </a>
        <a href="https://github.com/Derp52" target="_blank" rel="noopener noreferrer">
        <FaGithub />
        </a>
        <a href="https://www.instagram.com/david_ezra_p/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
        </a>
      </div>
    </nav>
  )
}

export default navbar
