import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
  return(
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Navbar.Brand href="#">Home</Navbar.Brand>
        <Nav.Link href="#">Users</Nav.Link>
        <Nav.Link href="#">Devices</Nav.Link>
        <Nav.Link href="#">Requests</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="#">SignIn</Nav.Link>
        <Nav.Link href="#">SignOut</Nav.Link>
        <Nav.Link href="#">Account</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header;
