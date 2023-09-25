import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from 'react-bootstrap'
import { FaLinkedinIn, FaFacebook, FaMailchimp } from "react-icons/fa";
import { EnvelopeFill } from "react-bootstrap-icons";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a backend developer
          role.
          <br />
          If you believe that my skills and experience align with your team's needs
          <br />
          or would like to discuss potential collaborations, please feel free to reach out to me.
          <br />
          I would be thrilled to connect with you and explore how I can contribute to your projects.
        </p>
        <Row>
          <Col md={7}>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/bal%C3%A1zs-doktor-922643181/");
            }}
              className='socailmediabtn'><FaLinkedinIn className='icon' />
            </button>
            <a 
              href="mailto:doktor.balazs1@gmail.com"
              className='socailmediabtn'><EnvelopeFill
              color="black"
              className='icon' />
            </a>
          </Col>
        </Row>
        <span></span>
      </Container>
    </div>
  );
}

export default Contactpage;
