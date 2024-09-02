import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';

function App() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" sticky = "top">
      <Container>
        <Navbar.Brand href="#home"><h2>3legant.</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/"><h3>Home</h3></Nav.Link>
            <Nav.Link href="/shop"><h3>Shop</h3></Nav.Link>
            <Nav.Link href="/about"><h3>About us</h3></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;