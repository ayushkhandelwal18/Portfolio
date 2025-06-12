import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pfp me.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
  <Col md={8} className="home-about-description">

   <h1 style={{ fontSize: "2.6em" }}>
  <span className="purple">Welcome</span> to my digital space!
</h1>

<p className="home-about-body">
  I'm <b className="purple">Ayush Khandelwal</b>, an enthusiastic developer who loves to build, learn, and innovate.  
  <br />
  <br />
  While still on my learning journey, I enjoy exploring different technologies and working on meaningful projects.
  <br />
  <br />
  This space showcases my 
  <i>
    <b className="purple"> projects, skills, and developer journey. </b>
  </i>
  I’m always looking for ways to collaborate, grow, and make a difference through tech.
  <br />
  <br />
  Feel free to check out my work and
  <b className="purple"> let’s connect</b> to build something amazing —
  <i>
    <b className="purple"> together!</b>
  </i>
</p>

  </Col>
  <Col md={4} className="myAvtar">
    <Tilt>
      <img src={myImg} className="img-fluid" alt="avatar" />
    </Tilt>
  </Col>
</Row>



        <Row>
          <Col md={12} className="home-about-social">
            <h1>Let's Connect</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ayushkhandelwal18"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ayushdev186@gmail.com.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ayush-khandelwal-5234a3288/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
