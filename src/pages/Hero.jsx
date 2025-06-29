import { useState, useEffect } from 'react';
import lawOfficeImage from '../assets/images/law-bg1.png';
import './Hero.css';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = lawOfficeImage;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className="hero-container">
      <img 
        src={lawOfficeImage} 
        alt="Law Office" 
        className={`hero-image ${imageLoaded ? 'loaded' : ''}`}
        loading="eager"
        decoding="async"
        onLoad={() => setImageLoaded(true)}
      />
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
