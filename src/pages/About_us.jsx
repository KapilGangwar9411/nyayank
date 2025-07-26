import React from 'react';
import './About_us.css';
import {
  VisionIcon,
  MissionIcon,
  ApproachIcon,
  IprIcon,
  CorporateIcon,
  TaxationIcon,
  StartupIcon,
  CorporatesIcon,
  CreatorsIcon,
  LegalIcon,
  InstitutionsIcon,
  IndividualsIcon,
  ExpertiseIcon,
  CommunicationIcon,
  StrategicIcon,
  GlobalIcon,
  ContactIcon,
  ServicesIcon
} from '../components/Icons';

const Aboutus = () => {
  return (
    <div className="about-page-container">
      <div className="about-page-overlay"></div>
      <div className="about-page-content">
        <div className="about-page-header">
          <h1 className="about-page-title">About Nyayank</h1>
          <p className="about-page-subtitle">"Driven by Precision. Committed to You."</p>
        </div>

        <div className="about-page-description">
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

        <div className="about-page-cards">
          <div className="about-page-card">
            <div className="about-page-card-icon">
              <VisionIcon />
            </div>
            <h3>Vision</h3>
            <p>To empower innovation and protect rights with ethical legal counsel.</p>
          </div>

          <div className="about-page-card">
            <div className="about-page-card-icon">
              <MissionIcon />
            </div>
            <h3>Mission</h3>
            <p>Deliver clarity, accountability, and actionable solutions.</p>
          </div>

          <div className="about-page-card">
            <div className="about-page-card-icon">
              <ApproachIcon />
            </div>
            <h3>Approach</h3>
            <p>Strategic, responsive, and grounded in integrity.</p>
          </div>
        </div>

        <section className="about-page-services-section">
          <h2 className="about-page-section-title">What We Do</h2>
          <div className="about-page-services-grid">
            <div className="about-page-service-card">
              <div className="about-page-service-icon">
                <IprIcon />
              </div>
              <h3>Intellectual Property Rights (IPR)</h3>
              <p>From trademark filings to international patent protection and IP litigation, we help innovators and businesses safeguard their creative assets and technology.</p>
            </div>
            <div className="about-page-service-card">
              <div className="about-page-service-icon">
                <CorporateIcon />
              </div>
              <h3>Corporate & Commercial Law</h3>
              <p>We support businesses through contract drafting, policy formulation, compliance, and advisory services across industries and growth stages.</p>
            </div>
            <div className="about-page-service-card">
              <div className="about-page-service-icon">
                <TaxationIcon />
              </div>
              <h3>Taxation, Litigation & Advisory</h3>
              <p>Our taxation team ensures regulatory compliance, tax planning, and representation before authorities, while our litigation wing handles civil, criminal, consumer, and matrimonial disputes.</p>
            </div>
          </div>
        </section>

        <section className="about-page-clients-section">
          <h2 className="about-page-section-title">Who We Serve</h2>
          <div className="about-page-clients-grid">
            <div className="about-page-client-item">
              <span className="about-page-client-icon"><StartupIcon /></span>
              Startups & Entrepreneurs
            </div>
            <div className="about-page-client-item">
              <span className="about-page-client-icon"><CorporatesIcon /></span>
              MSMEs & Corporates
            </div>
            <div className="about-page-client-item">
              <span className="about-page-client-icon"><CreatorsIcon /></span>
              Content Creators, Artists, & Developers
            </div>
            <div className="about-page-client-item">
              <span className="about-page-client-icon"><LegalIcon /></span>
              Legal & Tax Professionals
            </div>
            <div className="about-page-client-item">
              <span className="about-page-client-icon"><InstitutionsIcon /></span>
              NGOs, Educational Institutions & Government Bodies
            </div>
            <div className="about-page-client-item">
              <span className="about-page-client-icon"><IndividualsIcon /></span>
              Individuals seeking personal legal support
            </div>
          </div>
        </section>

        <section className="about-page-trust-section">
          <h2 className="about-page-section-title">Why Clients Trust Nyayank</h2>
          <div className="about-page-trust-grid">
            <div className="about-page-trust-item">
              <div className="about-page-trust-icon">
                <ExpertiseIcon />
              </div>
              <div className="about-page-trust-content">
                <h3>Expertise Across Domains</h3>
                <p>IPR, Corporate Law, GST, Taxation, Civil, Criminal & Matrimonial</p>
              </div>
            </div>
            <div className="about-page-trust-item">
              <div className="about-page-trust-icon">
                <CommunicationIcon />
              </div>
              <div className="about-page-trust-content">
                <h3>Transparent Communication</h3>
                <p>We keep you informed, involved, and empowered throughout the process</p>
              </div>
            </div>
            <div className="about-page-trust-item">
              <div className="about-page-trust-icon">
                <StrategicIcon />
              </div>
              <div className="about-page-trust-content">
                <h3>Strategic Thinking</h3>
                <p>We offer more than legal answers—we provide actionable direction for your success</p>
              </div>
            </div>
            <div className="about-page-trust-item">
              <div className="about-page-trust-icon">
                <GlobalIcon />
              </div>
              <div className="about-page-trust-content">
                <h3>Pan-India Reach with Global Capability</h3>
                <p>Extensive network of trusted associates across India and international partners</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-page-cta-section">
          <div className="about-page-cta-container">
            <div className="about-page-cta-icon">
              <ContactIcon />
            </div>
            <div className="about-page-cta-content">
              <h2 className="about-page-cta-title">Ready to Take the Next Step?</h2>
              <p className="about-page-cta-text">
                Whether you're building a brand, protecting a product, resolving a dispute, or planning your next business move—we're here to help you do it legally, strategically, and confidently.
              </p>
              <p className="about-page-contact-text">
                Reach out today to know how we can support your legal journey.
              </p>
              <div className="about-page-cta-buttons">
                <button className="about-page-cta-button primary">
                  <ContactIcon />
                  Contact Us
                </button>
                <button className="about-page-cta-button secondary">
                  <ServicesIcon />
                  Explore Our Services
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
