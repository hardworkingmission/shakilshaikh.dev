import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles/footer.css'

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white text-center p-4">
      <p>&copy;{new Date().getFullYear()} Md. Shakil Shaikh. All rights reserved.</p>
      <div className="flex justify-center">
        <ul className="flex justify-center flex-row gap-3 py-2">
          <li className=''><a href="https://www.linkedin.com/in/md-shakil-shaikh" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
          <li className=''><a href="https://github.com/shakilshaikh" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
        </ul>
      </div>
    </footer>
  )
};

export default Footer;
