import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CollapsibleNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" >
      <Container fluid>
        <Navbar.Brand href="/"><div className='home_logo_holder'><img className='' href="home_logo" src='./img/logo_black.png' alt='The_sense_logo'/></div></Navbar.Brand>
        <div className="navbar-links">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/News">NEWS</Nav.Link>
              <div className='black-separation-bar'>|</div>
              <Nav.Link href="/Experiences">NOS ÉXPERIENCES</Nav.Link>
              <div className='black-separation-bar'>|</div>
              <Nav.Link href="/AboutUs">À PROPOS DE NOUS</Nav.Link>
              <div className='black-separation-bar'>|</div>
              <Nav.Link href="/Equipements">NOS ÉQUIPEMENTS</Nav.Link>
              <div className='black-separation-bar'>|</div>
              <Nav.Link className='login-link' href="/Login">CONNEXION</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;