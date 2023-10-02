import React from "react";
import "../../pages/style.css";
import { Container, Row } from 'react-bootstrap'
import { FaLinkedinIn } from "react-icons/fa";
import { EnvelopeFill } from "react-bootstrap-icons";

function Contactpage() {

  const sendMail = () => {
    window.location="mailto:doktor.balazs1@gmail.com";
  }

  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a backend developer role. 
          <div class="clear"></div>
          If you believe that my skills and experience align with your team's needs
          <div class="clear"></div>
          or would like to discuss potential collaborations, please feel free to reach out to me. 
          <div class="clear"></div>
          I would be thrilled to connect with you and explore how I can contribute to your projects.
        </p>
        <Row style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button onClick={() => {
              window.open("https://www.linkedin.com/in/bal%C3%A1zs-doktor-922643181/");
            }}
              className='socailmediabtn'>
                <FaLinkedinIn
                  color='black'
                  className='icon'
                />
            </button>
            <button 
              onClick={sendMail}
              className='socailmediabtn'>
                <EnvelopeFill
                  color="black"
                  className='icon'
                />
            </button>
        </Row>
        <span></span>
      </Container>
    </div>
  );
}

export default Contactpage;
