import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaBed, FaHeadset } from 'react-icons/fa';
import bergen from "../../images/bergen.png";

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="hero-text glass-panel p-5">
                <h1 className="display-4 fw-bold mb-4">About Holidaze</h1>
                <p className="lead mb-4">
                  Your premier accommodation booking agency in the heart of Bergen, Norway.
                  We specialize in connecting travelers with the perfect places to stay, ensuring unforgettable experiences.
                </p>
                <p>
                  Whether you are looking for a cozy bed and breakfast, a luxurious hotel, or a charming guesthouse, Holidaze offers a curated selection of accommodations to suit every taste and budget. Our local expertise means we only recommend the best.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="hero-image-wrapper">
                <img className="about-img modern-card" src={bergen} alt="Bergen Cityscape" />
                <div className="image-overlay glass-panel">
                  <h3 className="m-0">Experience Bergen</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="about-features py-5">
        <h2 className="text-center mb-5 section-title">Why Choose Us?</h2>
        <Row>
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100 text-center modern-card border-0 p-4">
              <Card.Body>
                <div className="feature-icon-wrapper mb-3">
                  <FaMapMarkerAlt className="feature-icon" size={40} />
                </div>
                <Card.Title>Local Expertise</Card.Title>
                <Card.Text>
                  Based in Bergen, our team has unparalleled knowledge of the city and its surroundings. We guide you to the hidden gems.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100 text-center modern-card border-0 p-4">
              <Card.Body>
                <div className="feature-icon-wrapper mb-3">
                  <FaBed className="feature-icon" size={40} />
                </div>
                <Card.Title>Curated Stays</Card.Title>
                <Card.Text>
                  Every accommodation listed on Holidaze has been carefully selected and vetted to ensure the highest standards of comfort.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card className="feature-card h-100 text-center modern-card border-0 p-4">
              <Card.Body>
                <div className="feature-icon-wrapper mb-3">
                  <FaHeadset className="feature-icon" size={40} />
                </div>
                <Card.Title>24/7 Support</Card.Title>
                <Card.Text>
                  Our dedicated support team is available around the clock to assist you with your booking and any questions during your stay.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}