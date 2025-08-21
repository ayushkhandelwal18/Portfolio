import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container>
      <p style={{ textAlign: "center", color: "#aaa", fontSize: "16px", marginBottom: "20px" }}>
        Click below to view or download my resume and explore my professional journey.
      </p>

      <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
        <Button
          variant="primary"
          href="https://drive.google.com/file/d/1uZHFKHe-qeOPShym-eoelwhMSwFLe63M/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "220px" }}
        >
          <AiOutlineDownload />
          &nbsp;View Resume
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
