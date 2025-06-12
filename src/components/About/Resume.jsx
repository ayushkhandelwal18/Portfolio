import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Ayush Khandelwal.pdf"; 

function Resume() {
  return (
    <Container>

      <p style={{ textAlign: "center", color: "#aaa", fontSize: "16px", marginBottom: "20px" }}>
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
