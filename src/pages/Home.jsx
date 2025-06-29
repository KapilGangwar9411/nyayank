import React from 'react';
import './Home.css';
import Navbar from './navbar';
import Hero from './Hero';
import About from './About_us';
import Practice from './practice_areas';
import Contact from './Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="main-container">
      <Navbar />
      <section id="home" className="section">
        <Hero />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="practice-areas" className="section">
        <Practice />
      </section>
      <section id="contact" className="section">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Home;