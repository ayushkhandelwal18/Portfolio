import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Resume from "./Resume";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Who <strong className="purple">I Am</strong> — Unfolding My
              Journey
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1> */}
        <Techstack />

        <h1 className="project-heading">
          My Everyday <strong className="purple">Development Tools</strong>
        </h1>
        <p style={{ textAlign: "center", color: "lightgray" }}>
          Tools that help me write, test, and collaborate efficiently.
        </p>
        <Toolstack />

        
       {/* --- Activities & Involvement Section --- */}
       <h1 className="project-heading">
  Other <strong className="purple">Activities & Involvement</strong>
</h1>
<p style={{ textAlign: "center", color: "#aaa", fontSize: "16px", marginBottom: "20px" }}>
  Contributing beyond classrooms through clubs and events.
</p>

<ul style={{ color: "#ddd", paddingLeft: "1rem", fontSize: "16px", lineHeight: "1.6" }}>
  <li style={{ listStyleType: "none", marginBottom: "1rem" }}>
    <span style={{ fontSize: "20px" }}>
      🚀 <strong >Social Media & Outreach,<span className="purple"> IIIT Kernel</span></strong> – The official tech club of IIIT Kota focused on connecting students with
      <strong> industry professionals, mentors, and alumni</strong> through technical events and mentorship sessions.
    </span>

    <span style={{ display: "block", marginTop: "6px", paddingLeft: "2rem", fontSize: "15.5px", color: "#ccc" }}>
      As a Social Media team member, I contributed to growing our club’s <strong>Instagram and LinkedIn reach</strong>, collaborated with other teams to organize speaker sessions, and helped boost engagement during events and challenges.
    </span>
  </li>
</ul>



{/* --- Certifications Section --- */}
<h1 className="project-heading" style={{ marginTop: "40px" }}>
  Certifications & <strong className="purple">Achievements</strong>
</h1>
<p style={{ textAlign: "center", color: "#aaa", fontSize: "16px", marginBottom: "20px" }}>
  Recognitions and participations that helped me grow outside the classroom.
</p>
<ul style={{ listStyle: "none", paddingLeft: "0", color: "#ddd", fontSize: "20px", lineHeight: "1.8" }}>
  <li>🏆 <strong>Top 1000 Student Innovators</strong> – SBI College Youth Ideathon 2025</li>
  <li>📜 <strong>TATA Crucible Campus Quiz</strong> – Certificate of Participation</li>
  <li>🧠 <strong>Flipkart Grid 6.0</strong> – Problem-Solving Participation</li>
  <li>🏁 <strong>OPTIGO</strong> – Coding Challenge by IIIT Bhopal (Participation Certificate)</li>
  <li>🔗 <strong>HackTheChain 2.0</strong> – Open Web Hackathon by IIIT Kota (Participation Certificate)</li>
  <li>🚀 Participated in multiple challenges on <strong>Unstop</strong></li>
</ul>

 <br />


        <h1 className="project-heading">
          Take a Look at My <strong className="purple">Resume</strong>
        </h1>
        <Resume />




      </Container>
    </Container>
  );
}

export default About;
