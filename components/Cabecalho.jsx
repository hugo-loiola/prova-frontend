import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Cabecalho = () => {
  return (
    <div>
      <Navbar variant="dark" collapseOnSelect expand="lg" bg="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">Obras de Arte</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/obras">Obras</Nav.Link>
              <Nav.Link href="/tiposdeobra">Tipos de Obras</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cabecalho;
