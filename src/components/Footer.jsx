// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './styles/footer.css'

const Footer = () => (
  <footer className="p-4 text-center bg-[#333] text-[#fff] ">
    <p>&copy; 2024 Md. Shakil Shaikh. All rights reserved.</p>
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/md-shakil-shaikh" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://github.com/shakilshaikh" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    </div>
  </footer>
);

export default Footer;
