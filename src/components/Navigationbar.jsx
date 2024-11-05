import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigationbar =  () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white flex items-center justify-between p-4">
      <div className="text-2xl font-bold text-teal-400">
        MyPortfolio
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} className="text-teal-400" /> : <FaBars size={24} className="text-teal-400" />}
      </div>
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-blue-900 md:bg-transparent items-center md:items-stretch md:space-x-6 space-y-4 md:space-y-0`}
      >
        <li className="flex-1 p-5 hover:bg-teal-600 hover:text-white md:hover:bg-transparent md:hover:text-teal-400 transition duration-300">
          <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-teal-600 hover:text-white md:hover:bg-transparent md:hover:text-teal-400 transition duration-300">
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-teal-600 hover:text-white md:hover:bg-transparent md:hover:text-teal-400 transition duration-300">
          <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-teal-600 hover:text-white md:hover:bg-transparent md:hover:text-teal-400 transition duration-300">
          <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-teal-600 hover:text-white md:hover:bg-transparent md:hover:text-teal-400 transition duration-300">
          <Link to="testimonials" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Testimonials</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-teal-600 hover:text-white md:hover:bg-transparent md:hover:text-teal-400 transition duration-300">
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigationbar;
