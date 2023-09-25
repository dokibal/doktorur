import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a self-taught Back End developer from Hungary.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={4}>
                                    <li>Java</li>
                                    <li>Spring</li>
                                    <li>Spring Boot</li>
                                </Col>
                                <Col md={4}>
                                    <li>React</li>
                                    <li>TypeScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </Col>
                                <Col md={4}>
                                    <li>C++</li>
                                    <li>Git</li>
                                    <li>Scrum</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage