import React from 'react';
import { Link } from 'react-router-dom';
// import './styles/navigationbarStyles.css'

const Navigationbar = () => (
  <nav className='bg-[#333] text-[#fff] flex justify-center'>
    <ul className='flex md:flex-row sm:flex-col bg-blue-400 w-1/2'>
      <li className='flex-1 p-5 hover:bg-red-300'><Link to="home" smooth={true} duration={500}>Home</Link></li>
      <li className='flex-1 p-5 hover:bg-red-300'><Link to="about" smooth={true} duration={500}>About</Link></li>
      <li className='flex-1 p-5 hover:bg-red-300'><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
      <li className='flex-1 p-5 hover:bg-red-300'><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
      <li className='flex-1 p-5 hover:bg-red-300'><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
      <li className='flex-1 p-5 hover:bg-red-300'><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
    </ul>
  </nav>
);

export default Navigationbar;