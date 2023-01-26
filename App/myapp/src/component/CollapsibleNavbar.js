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
import { Link } from "react-router-dom";

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
              <Nav.Link className='line-text' as={Link} to="/news">NEWS</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' as={Link} to="/experiences">NOS ÉXPERIENCES</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' as={Link} to="/a-propos-de-nous">À PROPOS DE NOUS</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='line-text' as={Link} to="/equipements">NOS ÉQUIPEMENTS</Nav.Link>
              <div className='vertical-line'></div>
              <Nav.Link className='login-link line-text' href="/Login">CONNEXION</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default CollapsibleNavbar;