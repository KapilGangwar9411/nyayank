import React from 'react';
import './Footer.css';
import logo from '../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-section-main">
          <div className="footer-logo">
            <img src={logo} alt="Nyayank Logo" />
          </div>
          <p className="footer-description">
            Providing expert legal solutions with integrity, dedication, and professionalism. Your trusted partner in navigating legal challenges.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section footer-section-contact">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Dehradun, India</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+91-9720502144</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>contact@nyayank.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Nyayank. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 