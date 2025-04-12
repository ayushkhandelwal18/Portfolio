import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/mylogo.png";

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => {
      updateNavbar(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        
      <Navbar.Brand as={Link} to="/" className="navbar-name">
  <span className="brand-name">Ayush <span className="highlight">Khandelwal</span></span>
</Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(!expand)}
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active-link" : ""}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active-link" : ""}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                className={location.pathname === "/project" ? "active-link" : ""}
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                className={location.pathname === "/contact" ? "active-link" : ""}
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
