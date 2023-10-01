import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

function Home() {
  return (
    <div className='homepagebackground'>
      <Container>
        <Row>
          <Col md={7}>
            <h2 className='headtext'>Hello <span className='wave'>👋 </span></h2>
            <h2 className='nametext'>I'm Balázs Doktor</h2>
            <span></span>
            <Text />
            <button onClick={() =>
            {
              window.open("https://www.linkedin.com/in/bal%C3%A1zs-doktor-922643181/");
            }}
              className='socailmediabtn'><FaLinkedinIn color='black' className='icon' />
            </button>
            <button onClick={() =>
            {
              window.open("https://www.facebook.com/dokibalazs8");
            }}
              className='socailmediabtn'><FaFacebook color='black' className='icon' />
            </button>
          </Col>

          <Col md={5}>
            <div className="imagedeveloper">
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home