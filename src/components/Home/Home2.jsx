import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
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
      <span className="purple">Welcome</span> to My Website!
    </h1>
    
    <p className="home-about-body"> 
      I'm <b className="purple">  Ayush Khandelwal  </b>, a passionate developer who fell in love with coding early on. Although still learning, I'm constantly growing my skills in different technologies. 🤷‍♂️
      <br />
      <br />
      I am always eager to learn, innovate, and build impactful solutions.
      
      <br />
      <br />
      Here, you'll find my 
      <i>
        <b className="purple"> latest projects, skills, and aspirations.  </b>
      </i>
       I'm constantly exploring new technologies and 
      <b className="purple"> seeking opportunities to collaborate and grow </b>in the tech industry.
      <br />
      <br />
      Feel free to explore my work and
      <b className="purple"> let's connect</b> to discuss
      <i>
        <b className="purple"> ideas</b> or <b className="purple">opportunities!</b>
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
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=khandelwalayush976@gmail.com"
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
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ayushk.18/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
