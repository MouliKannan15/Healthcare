import React from "react";
import './journey.css';

function Journey() {
  return (
    <div className="journey-container">
      <div className="treatment-header">
        <h2>
          Patient <span className="highlight">Journey</span>
        </h2>
        <p>Every patient's journey is unique - and so is our care.</p>
      </div>

      <div className="journey-image-wrapper">
        <img src="/image/Stepper 1.png" alt="Patient Journey" />
      </div>
    </div>
  );
}

export default Journey;
