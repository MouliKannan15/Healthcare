import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
        <div className="footer-content">
          <div className="footer-left">
            <img
              src="/image/Medagg logo.png"
              alt="Medagg Logo"
              className="footer-logo"
            />
            <p className="footer-description">
              Medagg Healthcare, established in 2021, is a pioneering force in promoting advanced non-surgical treatments across India.
              With a mission to bridge the gap in healthcare knowledge, we began as a discovery platform focused on connecting patients to hospitals.
              Today, we specialize in Interventional Radiology and advocate for non-surgical procedures as the future of healthcare.
            </p>
            <button className="know-more-btn">Know More</button>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li>Knee Pain</li>
                <li>Enlarged Prostate</li>
                <li>Thyroid Nodule</li>
                <li>Varicocele</li>
                <li>Fallopian Tube Block</li>
                <li>Uterine Fibroids</li>
                <li>Varicose Veins</li>
                <li>Interventional</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          

       <p>
  <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms and Conditions</a>
</p>


         

          <p>© 2025 Medagghealthcare. All rights reserved.</p>
        </div>
     
    </footer>
  );
};

export default Footer;
