import React from 'react'
import { FaSquareXTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'


function navbar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      {/* Logo/Name Section */}
      <div className='flex items-center'>
        <h1 className='text-white'>Portofolio</h1>
      </div>

      {/* Social Icons Section */}
      <div className='flex items-center justify-center gap-4 text-2xl text-white'>
        <FaLinkedin />
        <FaGithub />
        <FaInstagram />
        <FaSquareXTwitter />
      </div>
    </nav>
  )
}

export default navbar
