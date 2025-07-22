import React from 'react';
import './book.css';
import { FaSearch } from 'react-icons/fa';

const Booking = () => {
  return (
    <section className="hero-section">
      <div className="hero-content container">
        <div className="hero-left">

          
 <p className="hero-description">
            Are You Looking To Get A Consultation For Your Healthcare Needs
          </p>

    


          <h1 className="hero-title">
            Booking Your Appoinment with<br />
            Experts Near You.
          </h1>

         

          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Enter Your Phone Number" />
            <button>Book Appointment</button>
          </div>

          
        </div>

        <div className="hero-right">
         
          <img src="/image/image 132.png" alt="Doctor" className="doctor-img" />
        </div>
      </div>
    </section>
  );
};

export default Booking;
