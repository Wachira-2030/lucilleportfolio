import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import ScrollButton from './ScrollButton.js';
import Home from './Home.js';
import Expertise from './Expertise.js';


function App() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const scrollToSection = (sectionId) => {
    // Implement your scrolling logic here
    console.log(`Scrolling to ${sectionId}`);
  };

  
  useEffect(() => {
    const closeMenu = () => {
      if (menuActive) {
        setMenuActive(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => {
      document.removeEventListener('click', closeMenu);
    };
  }, [menuActive]);

  return (
    <div>
       <div className={`navbar ${menuActive ? 'active' : ''}`}></div>
      <Navbar toggleMenu={toggleMenu} scrollToSection={scrollToSection} />
      <Home/>
      <Expertise />
      <ScrollButton scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
