import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import CarReservationManager from '../../Assets/car-manager.jpg'
import TodoApp from '../../Assets/todo.jpg'

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={TodoApp}
                isBlog={false}
                title="TODO App"
                description="The frontend of the TODO App is built using React.js with JavaScript, while the backend is developed in Java using Spring Boot. The application's database is powered by PostgreSQL. This project enables users to efficiently manage their tasks and to-do lists."
                ghLink="https://amazing-cajeta-f366f2.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={CarReservationManager}
                isBlog={false}
                title="Car Reservation Manager"
                description="The Car Reservation Manager's frontend is constructed using React.js with TypeScript, while the backend is implemented in Java using Spring Boot. The application relies on a PostgreSQL database. This project empowers users to efficiently oversee cars and car reservations through an intuitive calendar view. Additionally, users can seamlessly add, delete, or modify car listings."
                ghLink="https://bucolic-jalebi-fdd059.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist