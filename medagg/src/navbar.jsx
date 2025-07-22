import React from 'react';
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import './navbar.css';

function MainNavbar() {
  return (
    <>
      

      
      <Navbar expand="lg" className="top-navbar">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="/image/Medagg logo.png" 
              alt="Medagg Logo"
              height="40"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="me-auto nav-links">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#join">Join with us</Nav.Link>
              <Nav.Link href="#investor">Become an Investor</Nav.Link>
            </Nav>
            <div className="contact-btn mt-2 mt-lg-0">
              <FaPhoneAlt  className="phone-icon" />
              <span className="phone-text">+91 9363656010</span>
              <Button className="book-btn">Book Appointment</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

     


<div className="bottom-menu">
  <Container>
    <div className="submenu-center-wrapper d-flex justify-content-center">
      <Nav className="submenu d-flex flex-row">
        <NavDropdown title="Knee Pain" />
        <NavDropdown title="Enlarged Prostate" />
        <NavDropdown title="Thyroid Nodule" />
        <NavDropdown title="Varicocele" />
        <NavDropdown title="Fallopian Tube Block" />
        <NavDropdown title="Uterine Fibroids" />
        <Nav.Link>Varicose Veins</Nav.Link>
        <NavDropdown title="Interventional" />
      </Nav>
    </div>
  </Container>
</div>

    </>
  );
}

export default MainNavbar;
