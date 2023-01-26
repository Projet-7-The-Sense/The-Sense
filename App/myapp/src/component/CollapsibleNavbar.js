import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect fixed='top' expand="lg" >
      <Container fluid>
        <Navbar.Brand href="/"><div className='home_logo_holder'><img href="home_logo" src='./img/logo_black.png' alt='The_sense_logo'/></div></Navbar.Brand>
        <div className="navbar-links">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='line-text' as={Link} to="/news">NEWS</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' as={Link} to="/experiences">NOS ÉXPERIENCES</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' as={Link} to="/a-propos-de-nous">À PROPOS DE NOUS</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' as={Link} to="/equipements">NOS ÉQUIPEMENTS</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='login-link line-text' as={Link} to="/connexion">CONNEXION</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;