import React, { useState } from 'react';
import './practice_areas.css';

const PracticeAreas = () => {
  const [expandedArea, setExpandedArea] = useState(null);

  const practiceAreas = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 2zm6.82 6L12 12.72 5.18 8 12 3.28 18.82 8zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
        </svg>
      ),
      title: 'Intellectual Property Rights (IPR)',
      description: 'Protecting innovation is at the heart of what we do. Our IPR services are tailored for creators, startups, businesses, and institutions.',
      services: [
        {
          title: 'Trademark Services',
          items: [
            'Search & Clearance',
            'Filing & Prosecution (India & International)',
            'Oppositions, Cancellations & Hearings',
            'Licensing, Assignment & Portfolio Management',
            'Enforcement & Litigation'
          ]
        },
        {
          title: 'Copyright Services',
          items: [
            'Copyright Registration',
            'Advisory on Fair Use, Licensing, and Ownership',
            'Content Protection & Enforcement (Offline & Digital)',
            'Licensing & Assignment Agreements'
          ]
        },
        {
          title: 'Patent Services',
          items: [
            'Patentability Search & Analysis',
            'Patent Drafting, Filing (India & PCT), and Prosecution',
            'Opposition, Revocation & Enforcement',
            'Licensing, Technology Transfer & R&D Agreements'
          ]
        },
        {
          title: 'Design Protection',
          items: [
            'Design Searches & Registrations',
            'Infringement Advisory & Litigation',
            'Design Portfolio Management'
          ]
        },
        {
          title: 'Trade Secrets & Confidential Information',
          items: [
            'Strategy & Advisory',
            'Drafting NDAs & Confidentiality Clauses',
            'Misappropriation Litigation Support'
          ]
        },
        {
          title: 'Geographical Indications (GI)',
          items: [
            'GI Filing & Registration',
            'Protection, Enforcement & Stakeholder Awareness'
          ]
        },
        {
          title: 'Domain Name & Digital IP',
          items: [
            'INDRP/UDRP Dispute Resolution',
            'Brand Monitoring & Anti-Counterfeiting',
            'DMCA Notices & Takedowns'
          ]
        },
        {
          title: 'IP Due Diligence & Strategy',
          items: [
            'IP Valuation & Commercial Strategy',
            'Audits for M&A, Fundraising & Compliance'
          ]
        },
        {
          title: 'International IP Protection',
          items: [
            'PCT Patent & Madrid Trademark Filings',
            'Global IP Management through Associate Network'
          ]
        },
        {
          title: 'Training & Policy Development',
          items: [
            'IP Awareness Workshops',
            'Internal IP Policy & SOP Drafting'
          ]
        }
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
      ),
      title: 'Corporate & Commercial Law',
      description: 'Legal solutions for businesses at every stage—formation, operation, and expansion.',
      services: [
        {
          title: 'Agreements & Contracts',
          items: [
            'Service, Supply, Vendor & Employment Agreements',
            'Franchise, License, NDAs & Partnership Documents',
            'MoUs, Founders, Shareholders & Joint Venture Agreements',
            'Work Made for Hire, Freelance, Consultancy Contracts'
          ]
        },
        {
          title: 'Entry & Exit Documentation',
          items: [
            'Onboarding Packs, Offer Letters & Contracts',
            'Termination Letters, Settlements & Exit NDAs'
          ]
        },
        {
          title: 'Legal Notices',
          items: [
            'Demand Notices, Breach Notices & Legal Responses'
          ]
        },
        {
          title: 'Corporate Governance & Policies',
          items: [
            'POSH Policy, Code of Conduct, Privacy & Data Protection',
            'Work Mode, Health & Safety, Equipment Usage, IPR Policy',
            'Employee Handbooks & Custom Governance Frameworks'
          ]
        },
        {
          title: 'Compliance Advisory',
          items: [
            'Labour Law & HR Compliance',
            'Data Protection (including GDPR-aligned policies)',
            'Periodic Legal Audits & Risk Reports'
          ]
        }
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z"/>
        </svg>
      ),
      title: 'GST & Taxation',
      description: 'Helping individuals and businesses meet compliance, reduce tax risk, and navigate litigation.',
      services: [
        {
          title: 'Accounting & Audit Management',
          items: [
            'Managing In-House Accounting Teams with Legal Oversight',
            'SOP Creation for Finance Teams & Task Allocation',
            'Periodic Review for Output Optimization',
            'Daily Transaction Monitoring',
            'Quarterly Finalization & Compliance Checks'
          ]
        },
        {
          title: 'GST Services',
          items: [
            'GST Registration, Objection Handling & Revocation',
            'Monthly Return Filing (GSTR 1, 3B) & Annual Return (GSTR 9/9C)',
            'Input Tax Credit (ITC) Reconciliation',
            'Filing of TDS/TCS under GST',
            'Legal Compliance for E-Commerce Operators',
            'GST Audit Reports, Refund Claims & Complex Structuring',
            'SCN Representation & Litigation Support'
          ]
        },
        {
          title: 'Direct Taxation (Income & Corporate)',
          items: [
            'Income Tax Return Filing – Individual, HUFs, Firms, Companies',
            'Filing & Correction of TDS (24Q/26Q)',
            'Tax Planning for MSMEs & Startups',
            'Representation Before Assessing Officers, CIT(A), ITAT'
          ]
        },
        {
          title: 'Cross-Border Tax Advisory',
          items: [
            'Withholding Tax (WHT) Structuring',
            'DTAA Interpretation & PE Risk Management',
            'Transfer Pricing Strategy & Documentation'
          ]
        }
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      ),
      title: 'Dispute Resolution & Litigation',
      description: 'Strategic representation and dispute resolution across various legal forums.',
      services: [
        {
          title: 'Civil Litigation',
          items: [
            'Property Disputes',
            'Recovery Suits',
            'Contractual Matters'
          ]
        },
        {
          title: 'Criminal Litigation',
          items: [
            'Bail Applications',
            'Criminal Trials & Defenses'
          ]
        },
        {
          title: 'Matrimonial & Family Law',
          items: [
            'Divorce',
            'Child Custody',
            'Maintenance',
            'Domestic Violence'
          ]
        },
        {
          title: 'Consumer Disputes',
          items: [
            'Representation before Consumer Forums & Appeals'
          ]
        },
        {
          title: 'Tax & IP Litigation',
          items: [
            'Trademark, Copyright & Patent Disputes',
            'Tax Show Cause Notices, Appeals, and Representations'
          ]
        },
        {
          title: 'IT & Cyber Law Offences',
          items: [
            'Online Harassment',
            'Data Theft',
            'Fraud & Platform Violations'
          ]
        }
      ]
    }
  ];

  const handleAreaClick = (index) => {
    setExpandedArea(expandedArea === index ? null : index);
  };

  return (
    <div className="practice-container">
      <div className="practice-overlay"></div>
      <div className="practice-content">
        <div className="practice-header">
          <h1 className="practice-title">Practice Areas</h1>
          <p className="practice-subtitle">At Nyayank Advocates & IP Attorneys, we offer a comprehensive suite of legal services across multiple domains. Our practice is built on specialization, precision, and a commitment to client success.</p>
          <div className="title-underline"></div>
        </div>

        <div className="practice-areas-list">
          {practiceAreas.map((area, index) => (
            <div 
              className={`practice-area ${expandedArea === index ? 'expanded' : ''}`} 
              key={index}
              onClick={() => handleAreaClick(index)}
            >
              <div className="practice-area-header">
                <div className="area-icon">{area.icon}</div>
                <h2 className="area-title">{area.title}</h2>
                <div className="expand-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 10l5 5 5-5z"/>
                  </svg>
                </div>
              </div>
              
              <div className="practice-area-content">
                <p className="area-description">{area.description}</p>
                
                <div className="services-container">
                  {area.services.map((serviceGroup, groupIndex) => (
                    <div key={groupIndex} className="service-group">
                      <h3 className="service-group-title">{serviceGroup.title}</h3>
                      <ul className="services-list">
                        {serviceGroup.items.map((item, itemIndex) => (
                          <li className="service-item" key={itemIndex}>
                            <span className="service-bullet">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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