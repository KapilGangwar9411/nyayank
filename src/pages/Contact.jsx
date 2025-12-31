import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleScheduleClick = () => {
    // Implement scheduling functionality
    console.log('Schedule consultation clicked');
  };

  return (
    <div className="contact-container">
      <div className="contact-overlay"></div>
      <div className="contact-content">
        <div className="contact-header">
          <h1 className="contact-title">Need Legal Guidance?</h1>
          <p className="contact-subtitle">
            At Nyayank, our approach is proactive, solution-driven, and always aligned with your goals. 
            Whether you need a quick consultation or full legal representation, our team is ready to assist.
          </p>
        </div>

        <div className="contact-main">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-section">
                <h2 className="info-section-title">Get in touch to discuss your legal needs</h2>
                <div className="info-items">
                  <div className="info-item">
                    <span className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                    </span>
                    <div className="info-text">
                      <h3>Address</h3>
                      <p>Bahadurpur road, selaqui,<br />Dehradun, Uttarakhand-248197</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                    </span>
                    <div className="info-text">
                      <h3>Email</h3>
                      <p>Ankurgangwar@nyayank.in</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
                      </svg>
                    </span>
                    <div className="info-text">
                      <h3>Phone</h3>
                      <p>+91-9720502144</p>
                    </div>
                  </div>
                </div>
                <div className="action-buttons">
                  <button className="schedule-btn" onClick={handleScheduleClick}>
                    Schedule a Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="form-title">Send us a Message</h2>
              <div className="form-grid">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="4"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 