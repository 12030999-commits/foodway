import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

function Footer() {
  return (
    <Navbar
    bg='dark'
    variant='dark'
    expand="lg"
    fixed='bottom'
    className='footer-navbar'>
    <Container className="justify-content-center">
      <Navbar.Text>

        &copy; 2025 FoodWay restaurant
      </Navbar.Text>
      </Container>
      </Navbar>
  
  );
}

export default Footer;