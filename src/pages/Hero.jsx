"use client";
import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={`hero-container ${isMounted ? 'is-mounted' : ''}`}>
      <div className="hero-text-container">
        <p className="hero-welcome">Welcome to</p>
        <h1 className="hero-title">Nyayank Advocates & IP Attorneys.</h1>
        <p className="hero-tagline">"Justice Rooted in Expertise, Grown with Integrity."</p>
      </div>
    </div>
  );
};

export default Hero;