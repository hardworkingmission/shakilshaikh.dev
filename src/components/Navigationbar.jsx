import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigationbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
      <div className="text-2xl font-bold">
        MyPortfolio
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <ul
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col md:flex md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent items-center md:items-stretch md:space-x-4 space-y-4 md:space-y-0`}
      >
        <li className="flex-1 p-5 hover:bg-red-300 md:hover:bg-transparent">
          <Link to="home" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-red-300 md:hover:bg-transparent">
          <Link to="about" smooth={true} duration={500} onClick={() => setIsOpen(false)}>About</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-red-300 md:hover:bg-transparent">
          <Link to="skills" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Skills</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-red-300 md:hover:bg-transparent">
          <Link to="projects" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Projects</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-red-300 md:hover:bg-transparent">
          <Link to="testimonials" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Testimonials</Link>
        </li>
        <li className="flex-1 p-5 hover:bg-red-300 md:hover:bg-transparent">
          <Link to="contact" smooth={true} duration={500} onClick={() => setIsOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigationbar;
