import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/AYUSH RESUME.pdf";  // Ensure the PDF path is correct

function Resume() {
  return (
    <Container>
      <p style={{ marginBottom: "10px", fontSize: "16px", color: "#fff" }}>
      Click below to view or download my resume and explore my professional journey.
      </p>

      {/* Download Button */}
      <Row style={{ justifyContent: "center", position: "relative", marginBottom: "20px" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "190px" }}>
          <AiOutlineDownload />
          &nbsp;Download Resume
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
