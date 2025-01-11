import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Khandelwal </span>
            a <span className="purple">second-year </span>B.Tech student at the
            <span className="purple"> Indian Institute of Information Technology, Kota, </span>
            specializing in<span className="purple"> Electronics and Communication Engineering.</span>
            <br />
            <br />
            I am a MERN Stack Developer, eager to apply my skills 
            in creating innovative projects and seeking opportunities
             to gain practical experience in the tech industry. 
            <br />
            Along with this, I am actively learning Data Structures and Algorithms to further enhance my programming skills.
            <br />
            <br />
            Apart from coding, I have a keen interest in startups and business, 
            with an entrepreneurial mindset and a passion for innovation and building new solutions.
          </p>
         

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's connect and create impactful solutions together!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
