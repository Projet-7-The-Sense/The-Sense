import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><div className='home_logo_holder'><img className='' href="home_logo" src='./img/logo_black.png' alt='The_sense_logo'/></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/News">NEWS</Nav.Link>
              <Nav.Link href="/Experiences">NOS ÉXPERIENCES</Nav.Link>
              <Nav.Link href="/AboutUs">À PROPOS DE NOUS</Nav.Link>
              <Nav.Link href="/Equipements">NOS ÉQUIPEMENTS</Nav.Link>
              <Nav.Link href="/Login">CONNEXION</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;