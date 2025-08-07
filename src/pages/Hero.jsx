"use client";
import { useState, useEffect } from 'react';
import lawOfficeImage from '../assets/images/test.png';
import './Hero.css';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // This effect runs once on component mount.
    // We'll use a CSS class to control the animations for all elements.
    setIsLoaded(true);
  }, []);

  return (
    <div className={`hero-container ${isLoaded ? 'loaded' : ''}`}>
      <div 
        className="hero-image"
        style={{ backgroundImage: `url(${lawOfficeImage})` }}
        aria-label="Law Office Background"
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-text-container">
        <p className="hero-welcome">Welcome to</p>
        <h1 className="hero-title">Nyayank Advocates & IP Attorneys.</h1>
        <p className="hero-tagline">"Justice Rooted in Expertise, Grown with Integrity."</p>
      </div>
    </div>
  );
};

export default Hero;
