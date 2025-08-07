import React, { useState, useEffect } from 'react';
import './navbar.css';
import logo from '/images/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnWhiteSection, setIsOnWhiteSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      const contactSection = document.getElementById('contact');
      
      if (aboutSection && contactSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const contactRect = contactSection.getBoundingClientRect();
        const isAboutVisible = aboutRect.top <= 50 && aboutRect.bottom >= 50;
        const isContactVisible = contactRect.top <= 50 && contactRect.bottom >= 50;
        
        setIsOnWhiteSection(isAboutVisible || isContactVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${isOnWhiteSection ? 'on-white' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" onClick={handleLinkClick}>
            <img src={logo} alt="Nyayank Logo" className="logo-image" />
          </a>
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={handleLinkClick}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#practice-areas" className="nav-link" onClick={handleLinkClick}>
              Practice Areas
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-button" onClick={handleLinkClick}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
