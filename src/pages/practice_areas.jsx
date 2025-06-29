import React from 'react';
import './practice_areas.css';

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 2zm6.82 6L12 12.72 5.18 8 12 3.28 18.82 8zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
          <path d="M12 12.72L5.18 8 12 3.28 18.82 8z"/>
        </svg>
      ),
      title: 'Intellectual Property Rights',
      subtitle: 'Protecting Your Innovations',
      description: 'Comprehensive protection for your intellectual assets through strategic IP management and enforcement.',
      services: [
        'Trademark Registration & Protection',
        'Patent Filing & Prosecution',
        'Copyright Registration',
        'Design Protection',
        'Geographical Indications',
        'IP Portfolio Management',
        'Digital IP & Domain Disputes'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
      ),
      title: 'Corporate & Commercial',
      subtitle: 'Building Business Foundations',
      description: 'End-to-end legal solutions for businesses, from startups to established corporations.',
      services: [
        'Contract Drafting & Review',
        'Business Agreements',
        'Corporate Governance',
        'Data Protection & GDPR',
        'POSH Compliance',
        'Legal Due Diligence',
        'Regulatory Compliance'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/>
        </svg>
      ),
      title: 'GST & Taxation',
      subtitle: 'Navigating Tax Complexities',
      description: 'Expert guidance through the complexities of taxation with compliance and strategic planning.',
      services: [
        'GST Registration & Filing',
        'Income Tax Planning',
        'Corporate Tax Strategy',
        'Tax Appeals & Litigation',
        'International Taxation',
        'Tax Compliance',
        'Advisory Services'
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      title: 'Litigation & Disputes',
      subtitle: 'Resolving Legal Challenges',
      description: 'Strategic representation and dispute resolution across various legal forums.',
      services: [
        'Civil Litigation',
        'Criminal Defense',
        'Family Law Matters',
        'IP & Technology Disputes',
        'Consumer Protection',
        'Cyber Law',
        'Alternative Dispute Resolution'
      ]
    }
  ];

  return (
    <div className="practice-container">
      <div className="practice-overlay"></div>
      <div className="practice-content">
        <div className="practice-header">
          <h1 className="practice-title">Practice Areas</h1>
          <p className="practice-subtitle">Comprehensive Legal Solutions for Every Challenge</p>
          <div className="title-underline"></div>
        </div>

        <div className="practice-grid">
          {practiceAreas.map((area, index) => (
            <div className="practice-card" key={index}>
              <div className="card-content">
                <div className="card-icon">{area.icon}</div>
                <h2 className="card-title">{area.title}</h2>
                <h3 className="card-subtitle">{area.subtitle}</h3>
                <p className="card-description">{area.description}</p>
                
                <div className="services-container">
                  <h4 className="services-title">Our Services</h4>
                  <ul className="services-list">
                    {area.services.map((service, serviceIndex) => (
                      <li className="service-item" key={serviceIndex}>
                        <span className="service-bullet">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;