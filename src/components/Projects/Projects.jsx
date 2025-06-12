import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import restauraunt from "../../Assets/restauraunt.jpg";
import ecommm from "../../Assets/ecommimage.jpeg";
import realtimeimg from "../../Assets/realtimeimg.jpeg";
import rideimg from "../../Assets/rideimg.jpeg";
import virtual from "../../Assets/virtual.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
        What I've Been <strong className="purple">Building </strong>
        </h1>
        <p style={{ color: "white" }}>
        Take a look at some of my recent and most meaningful development work.


        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rideimg}
              isBlog={false}
              title={
                <span style={{
                  fontWeight: 'bold',
                  color: '#c770f0',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  🚕 BookMyRide (In Progress)
                </span>
              }
              description="Building a full-stack ride-booking platform inspired by Uber using the MERN stack.
              Features include user authentication, real-time driver tracking, ride requests, and route mapping."
              ghLink="https://github.com/ayushkhandelwal18/BookMyRide"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommm}
              isBlog={false}
              title={
                <span style={{
                  fontWeight: 'bold',
                  color: '#c770f0',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  🛒 Ecommerce Site Backend
                </span>
              }
              description=" A robust e-commerce backend built with Node.js, Express.js, and MongoDB. 
              Features include user authentication, 
              product and order management, secure API endpoints, error handling, and email notifications."
              ghLink="https://github.com/ayushkhandelwal18/Backend-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={realtimeimg}
              isBlog={false}
              title={
                <span style={{
                  fontWeight: 'bold',
                  color: '#c770f0',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  📍 Realtime Device Tracking System
                </span>
              }
              description="Built a real-time location tracking app using Node.js, 
              Express, Socket.io, and Leaflet.js for live map visualization."
              ghLink="https://github.com/ayushkhandelwal18/Real-Time-Tracking"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restauraunt}
              isBlog={false}
              title={
                <span style={{
                  fontWeight: 'bold',
                  color: '#c770f0',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  🍽️ Restauraunt Management Backend
                </span>
              }
              
              description="A complete backend solution for restaurant operations, built with Node.js and Express.js.
       Features include menu management, order processing, and secure API endpoints designed for seamless restaurant workflows."
              ghLink="https://github.com/ayushkhandelwal18/Restauraunt-Management-Backend"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtual}
              isBlog={false}
              title={
                <span style={{
                  fontWeight: 'bold',
                  color: '#c770f0',
                  padding: '4px 8px',
                  borderRadius: '6px'
                }}>
                  🌐 VirtualR Landing Page
                </span>
              }
              
              description="My first frontend project using React 19, Vite, and Tailwind CSS. 
                         Built a clean and responsive landing page inspired by a YouTube tutorial."
              ghLink="https://github.com/ayushkhandelwal18/first-react-app-landing-page"
              demoLink="https://first-react-app-landing-page.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;