import React from 'react';

const ScrollButton = ({ scrollToSection }) => (
  <div className="scroll-button" onClick={() => scrollToSection('#section2')}>↓</div>
);

export default ScrollButton;