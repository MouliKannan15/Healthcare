import React from 'react';
import './frontdoc.css';
import { FaSearch } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content container">
        <div className="hero-left">

          


          <div className="isvir-inline">
  <img src="/image/isvir_logo-1-600x202 1.png" alt="ISVIR Logo" className="isvir-logo" />
  <div className="isvir-text">
    <h1 className="hero-isvir">ISVIR</h1>
    <h5 className="isvir-subtitle">
      Indian Society of Vascular and  <br />Interventional Radiology
    </h5>
  </div>
</div>


          <h1 className="hero-title">
            No Surgery. No Scars. <br />
            Just Results.
          </h1>

          <p className="hero-description">
            We help you move beyond fear, surgery, and slow recovery.
          </p>

          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Facing symptoms? Type them in" />
            <button>Search</button>
          </div>

          <div className="popular-search">
            <span>Popular Search :</span>
            <div className="tags">
              <span>Knee Pain</span>
              <span>Breast Nodule</span>
              <span>Thyroid</span>
              <span>Prostate</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
         
          <img src="/image/Group 1000001562.png" alt="Doctor" className="doctor-img" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
