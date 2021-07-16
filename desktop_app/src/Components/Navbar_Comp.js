import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navbar_Comp() {

return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Link to="/" className="Nav_links">
        <Navbar.Brand>Desktop-App</Navbar.Brand>
      </Link>
       <Nav>
        <Link to="/" className="Nav_links">
          <Nav>Home</Nav>
        </Link>
         <Link to="/about" className="Nav_links">
          <Nav>About</Nav>
         </Link>
         <Link to="/contact" className="Nav_links">
          <Nav>Contact</Nav>
         </Link>
       </Nav>
    </Container>
  </Navbar>
);
}

export default Navbar_Comp;
