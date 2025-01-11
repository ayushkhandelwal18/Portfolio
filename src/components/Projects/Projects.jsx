import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import restauraunt from "../../Assets/restauraunt.jpg";
import ecommm from "../../Assets/ecommm.jpg";
import portfolio from "../../Assets/ecommm.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">

      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
         </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>


        <Col md={4} className="project-card">
            <ProjectCard
            imgPath={restauraunt}
              isBlog={false}
              title="Restaurant Backend" 
              description="A fully functional backend for a restaurant using Node.js and Express."
              ghLink="https://github.com/ayushkhandelwal18/Restauraunt-Management-Backend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={ecommm}
              isBlog={false}
              title="Ecommerce"
              description=" I am currently working on building a fully functional Ecommerce/Shop Website using MERN."
              ghLink="https://github.com/ayushkhandelwal18/myshop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description=" This is my portfolio website which I have built using MERN"
              ghLink="https://github.com/ayushkhandelwal18/myportfolio"
            />
          </Col>
</Row>
      </Container>
    </Container>
  );
}

export default Projects;
