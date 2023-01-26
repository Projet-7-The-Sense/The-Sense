import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Auth from "../contexts/Auth";
import { useContext, useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/esm/Button";


function CollapsibleNavbar() {
  const {isAuthenticated} = useContext(Auth);
  const handleLogout =()=>{
    console.log("on est déconnecté");
  }
  const [user, setUser] =useState({
    username:"",
    password:""
  })
  const handleChange =({currentTarget}) =>{
    const {name, value}= currentTarget;
    setUser({...user, [name]:value})
  }

  const handleSubmit = event =>{
    event.preventDefault();
    console.group();
    console.log(user);
    console.groupEnd();
  }

/*  useEffect(()=>{
    if (isAuthenticated){
      history.replace('/');
    }
  },[history, isAuthenticated]);*/

  return (
    <Navbar collapseOnSelect fixed='top' expand="lg" >
      <Container fluid>
        <Navbar.Brand href="/"><div className='home_logo_holder'><img href="home_logo" src='./img/logo_black.png' alt='The_sense_logo'/></div></Navbar.Brand>
        <div className="navbar-links">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='line-text' href="/News">NEWS</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' href="/Experiences">NOS ÉXPERIENCES</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' href="/AboutUs">À PROPOS DE NOUS</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' href="/Equipements">NOS ÉQUIPEMENTS</Nav.Link>
              <div className='vertical-line'></div>
              
              <NavDropdown className='login-link line-text' title="CONNEXION" id="collasible-nav-dropdown">
              {(!isAuthenticated && (
                <>
                <div className="tab-content">
                  <form className="form-profile" onSubmit={handleSubmit}>
                    <fieldset>
                      <legend>Connexion</legend>
                      <div className="form-group">
                        <Row>
                          <Col lg='3'>
                            <label htmlFor="email">email</label>
                          </Col>
                          <Col lg='9'>
                              <input
                              type="text"
                              name="username"
                              className="form-control"
                              id="email"
                              placeholder="mail@mail.fr"
                              onChange={handleChange}
                            />
                          </Col>
                        </Row>

                      </div>
                      <div className="form-group">
                        <Row>
                            <Col lg='3'>
                              <label htmlFor="password">password</label>
                            </Col>
                            <Col lg='9'>
                                <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={handleChange}
                              />
                            </Col>
                          </Row>
                      </div>
                      <div className="footer-connect">
                        <Row >
                          <Col lg={{ span: 4, offset: 3 }}>
                            <Link className="sign" to='/sign'>Créer un compte</Link>
                          </Col>
                          <Col lg='5'>
                            <Button type='submit'  variant="dark">Connexion</Button>
                          </Col>
                        </Row>
                      </div>
                      
                      
                    </fieldset>
                  </form>
                </div>
                </>
              )) || (
                <>
                <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item ><button className="btn btn-danger" onClick={handleLogout}>Déconnexion</button></NavDropdown.Item>
                </>
              )}
              
              <NavDropdown.Divider />
            </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;