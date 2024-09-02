// src/components/NavbarComponent.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="#home"><h2>3legant. v.1.03</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"><h3>Home</h3></Nav.Link>
            <Nav.Link as={Link} to="/shop"><h3>Shop</h3></Nav.Link>
            <Nav.Link as={Link} to="/about"><h3>About us</h3></Nav.Link>
            <Nav.Link as={Link} to="/cart"><h3>Cart</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;