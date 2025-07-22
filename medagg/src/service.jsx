import React from 'react';
import { FaUserMd, FaPills, FaStethoscope } from 'react-icons/fa';
import './service.css';

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>Our <span className="highlight">Services</span></h2>
          <p className="services-subtitle">Care that's safer, smarter, and surgery-free.</p>
        </div>
        
        <div className="services-grid">
         
          <div className="service-card">
            <div className="service-icon">
              <div className="icon-circle">
                <FaUserMd size={32} color="#e91e63" />
              </div>
            </div>
            <h3 className="service-title">SURGICAL</h3>
            <p className="service-description">
              We Connect you with top hospitals and expert doctors for exceptional care.
            </p>
          </div>

         
          <div className="service-card">
            <div className="service-icon">
              <div className="icon-circle">
                <FaPills size={32} color="#e91e63" />
              </div>
            </div>
            <h3 className="service-title">NON - SURGICAL</h3>
            <p className="service-description">
              Medogg's Care Custodians offer expert guidance on alternative treatments to surgery.
            </p>
          </div>

          
          <div className="service-card">
            <div className="service-icon">
              <div className="icon-circle">
                <FaStethoscope size={32} color="#e91e63" />
              </div>
            </div>
            <h3 className="service-title">SECOND OPINION</h3>
            <p className="service-description">
              Get expert second opinions from top doctors for the best care decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
