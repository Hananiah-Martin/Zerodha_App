import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Navbars() {
  return (
    <Navbar expand="lg" bg="light" data-bs-theme="light" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#">
          Zerodha
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll

          >
            <Nav.Link
              href="#action1"
              eventKey="link-1"
              style={{ paddingRight:"2rem" }}
            >
              Signup
            </Nav.Link>
            <Nav.Link href="#action2" eventKey="link-2" style={{ paddingRight:"2rem" }}>
              About
            </Nav.Link>
            <Nav.Link href="#action2" eventKey="link-3" style={{ paddingRight:"2rem" }}>
              Products
            </Nav.Link>
            <Nav.Link href="#action2" eventKey="link-4" className="lg-mx-3" style={{ paddingRight:"2rem" }}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#action2" eventKey="link-5" style={{ paddingRight:"2rem" }}>
              Support
            </Nav.Link>
          </Nav>
          <Form className="d-flex"></Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
