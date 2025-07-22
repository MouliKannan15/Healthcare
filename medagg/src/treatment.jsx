import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import "./treatment.css";

const treatments = [
  {
    title: "Geniculate Artery Embolization",
    desc: "A non-surgical solution to relieve chronic knee pain safely.",
    icon: "/images/knee.png",
    highlight: true,
  },
  {
    title: "Prostate Artery Embolization",
    desc: "Minimally invasive relief for varicocele without surgery.",
    icon: "/image/image 89.png",
  },
  {
    title: "Fallopian Tube Recanalization",
    desc: "Non-surgical treatment to unblock fallopian tubes.",
    icon: "/image/image 90.png",
  },
  {
    title: "Varicocele Embolization",
    desc: "Minimally invasive relief for varicocele without surgery.",
    icon: "/image/image 91.png",
  },
  {
    title: "Thyroid Nodule Ablation",
    desc: "Minimally invasive treatment for thyroid nodules.",
    icon: "/image/image 92.png",
  },
  {
    title: "Uterine Fibroid Embolization",
    desc: "A non-surgical procedure to shrink fibroids and relieve symptoms.",
    icon: "/image/image 93.png",
  },
  {
    title: "Varicose Veins",
    desc: "Non-surgical treatment for varicose veins.",
    icon: "/image/image 94.png",
  },
  {
    title: "Transcatheter Aortic Valve Replacement",
    desc: "Non-surgical aortic valve replacement for better heart function.",
    icon: "/image/image 95.png",
  },
];

const TreatmentSection = () => {
  return (



 
    <section className="treatment-section">
      <div className="cta-buttons">
        <button className="cta pink">Join With Us <FaArrowRight /></button>
        <button className="cta dark">Become An Investor <FaArrowRight /></button>
        <button className="cta pink">Book Appointment <FaArrowRight /></button>
      </div>

       <div className="treatment-header">
        <h2>
          Say Goodbye to <span className="highlight">Surgery</span>
        </h2>
        <p>Explore Safer, Scar-Free Treatments</p>
      </div>

      
    <Container className="py-5">
      <Row className="gx-4 gy-4">
        {treatments.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={3}>
            <div className="treatment-card">
              <div className="card-content">
                <h4 className="card-title">{item.title}</h4>
                <p className="card-desc">{item.desc}</p>
              </div>
              <div className="card-footer">
                <div className={`circle-btn ${item.highlight ? "highlight" : ""}`}>
                  <FaArrowRight />
                </div>
                <img src={item.icon} alt="icon" className="card-icon" />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </section>
  );
};

export default TreatmentSection
