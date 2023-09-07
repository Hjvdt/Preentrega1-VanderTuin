import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget.jsx';

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">Insumos para Laboratorios</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="INSUMOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Material Descartable</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Guantes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Material de vidrio y otros</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBar;