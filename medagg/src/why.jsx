import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUserMd,
  FaBriefcaseMedical,
  FaHeartbeat,
  FaHospital,
  FaStethoscope,
  FaNotesMedical,
} from "react-icons/fa";
import "./why.css";

const treatments = [
  {
    title: "SURGERIES SIMPLIFIED",
    desc: "A non-surgical solution to relieve chronic knee pain safely.",
    iconComp: <FaUserMd size={28} color="#e91e63" />,
  },
  {
    title: "CARE CUSTODIAN",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    iconComp: <FaBriefcaseMedical size={28} color="#e91e63" />,
  },
  {
    title: "ALL INSURANCE ACCEPTED",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    iconComp: <FaHeartbeat size={28} color="#e91e63" />,
  },
  {
    title: "SECOND OPINION",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    iconComp: <FaHospital size={28} color="#e91e63" />,
  },
  {
    title: "POST SURGERY CARE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    iconComp: <FaStethoscope size={28} color="#e91e63" />,
  },
  {
    title: "NO-COST EMI",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    iconComp: <FaNotesMedical size={28} color="#e91e63" />,
  },
];

const Whymedagg = () => {
  return (
    <section className="treatment-section">
      <div className="treatment-header">
        <h2>
          Why <span className="highlight">Medagg</span>
        </h2>
        <p>
          Medagg offers expert, non-surgical treatments with personalized care.
          <br />
          We guide you with precision, compassion and trusted medical expertise.
        </p>
      </div>

      <Container className="py-5">
        <Row className="gx-3 gy-4">
          {treatments.map((item, i) => (
            <Col key={i} xs={12} sm={6} md={4} lg={4}>
              <div className="treatment-card">
                <div className="service-icon">
                  <div className="icon-circle">{item.iconComp}</div>
                </div>
                <h4 className="card-title">{item.title}</h4>
                <p className="card-desc">{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Whymedagg;
