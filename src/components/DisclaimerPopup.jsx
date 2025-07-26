import React, { useState, useEffect } from 'react';
import './DisclaimerPopup.css';

const DisclaimerPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => { 
      setIsOpen(true);  
  }, []);

  const handleAccept = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="disclaimer-overlay">
      <div className="disclaimer-popup">
        <h2>DISCLAIMER</h2>
        <div className="disclaimer-content">
          <p>By proceeding further and clicking on the "I Agree" button below, you acknowledge and confirm that:</p>
          <ul>
            <li>You are seeking information about Nyayank Advocates & IP Attorneys of your own accord;</li>
            <li>There has been no form of solicitation, personal communication, invitation, or inducement of any sort whatsoever from us or any of our members to solicit any work through this website;</li>
            <li>The purpose of this website is solely to provide general information about our firm, areas of practice, and legal developments;</li>
            <li>Any information obtained or materials downloaded from this website are completely at your own volition and for informational purposes only and do not create any lawyer-client relationship.</li>
          </ul>
          <p>The content on this website is not intended to be a substitute for legal advice or a legal opinion. Nyayank Advocates & IP Attorneys is not liable for any consequence of any action taken by the user relying on material/information provided under this website.</p>
        </div>
        <button className="accept-button" onClick={handleAccept}>
          I Agree
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup; 