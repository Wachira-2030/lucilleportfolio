import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection }) => (
  <div className="navbar">
    <div className="logo">
      <img src="public/lucille-logo.png" alt="Logo" width="100" />
    </div>
    <div className="menu-icon" onClick={() => toggleMenu()}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav>
      <a href="#section1" onClick={() => scrollToSection('#section1')}>Home</a>
      <a href="#section2" onClick={() => scrollToSection('#section2')}>Expertise</a>
      <a href="#section3" onClick={() => scrollToSection('#section3')}>Work</a>
      <a href="#section4" onClick={() => scrollToSection('#section4')}>Contact Me</a>
    </nav>
  </div>
);

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    var menuIcon = document.querySelector('.menu-icon');
    var nav = document.querySelector('nav');
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('active');
    nav.classList.toggle('hide');
  }

  function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      toggleMenu();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
export default Navbar;