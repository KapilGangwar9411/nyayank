import React from 'react';
import './About_us.css';

const Aboutus = () => {
  return (
    <div className="about-container">
      <div className="about-overlay"></div>
      <div className="about-content">
        <div className="about-header">
          <h1 className="about-title">About Nyayank</h1>
          <p className="about-subtitle">"Driven by Precision. Committed to You."</p>
        </div>

        <div className="about-description">
          <p>
            Nyayank Advocates & IP Attorneys is a full-service law firm based in Dehradun. 
            We specialize in delivering clear, strategic, and client-first legal solutions 
            in areas of Intellectual Property, Corporate Law, Taxation, and Litigation.
          </p>
          <p>
            Our team combines deep legal expertise with a modern approach to help individuals, 
            startups, and businesses protect their rights, comply with regulations, and 
            resolve disputes effectively.
          </p>
        </div>

        <div className="about-cards">
          <div className="card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </div>
            <h3>Vision</h3>
            <p>To empower innovation and protect rights with ethical legal counsel.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z"/>
                <path d="M12 8l-2.5 7h5z"/>
              </svg>
            </div>
            <h3>Mission</h3>
            <p>Deliver clarity, accountability, and actionable solutions.</p>
          </div>

          <div className="card">
            <div className="card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM12 12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
              </svg>
            </div>
            <h3>Approach</h3>
            <p>Strategic, responsive, and grounded in integrity.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
