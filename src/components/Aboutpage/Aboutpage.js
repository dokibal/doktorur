import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={8}>
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>
                        Hello there! 👋 I'm Balázs Doktor, a mechanical engineer turned software developer. 
                        I began my software journey during my university years and started my career as a frontend developer intern at L&M Solutions Kft. 
                        My role allowed me to hone my skills in crafting user-friendly interfaces and creating seamless user experiences.
                        </p>
                        <p className='aboutdetails'>
                        However, my thirst for knowledge led me to bridge the gap between engineering and software development even further. 
                        I transitioned to Robert Bosch Kft., where I took on the role of a C++ developer. During my time there  
                        I specialized in hardware-centric C++ software development, primarily focusing on developing control software for cameras.
                        </p>
                        <p className='aboutdetails'>
                        More recently, I've ventured into the realm of Java and Spring Boot, further diversifying my skill set. 
                        This shift reflects my growing interest in backend development, as I explore the intricacies of building robust server-side applications.
                        </p>
                        <p className='aboutdetails'>
                        I thrive on tackling challenges and consistently strive for excellence in everything I do. 
                        Working in an international environment comes naturally to me, and I'm adept at transparently communicating my thoughts and ideas to others.
                        </p>
                        <p className='aboutdetails'>
                        In my free time, I'm an avid sports enthusiast, whether it's playing soccer with friends or going for a run. 
                        When the opportunity arises, I love to explore new places through travel, broadening my horizons and creating lasting memories.
                        </p>

                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col sm={4} md={4}>
                                    <li>Java</li>
                                    <li>Spring</li>
                                    <li>Spring Boot</li>
                                </Col>
                                <Col sm={4} md={4}>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </Col>
                                <Col sm={4} md={4}>
                                    <li>C++</li>
                                    <li>Git</li>
                                    <li>Scrum</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage