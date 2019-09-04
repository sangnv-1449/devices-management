import React from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" variant="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">Devices Management</Navbar.Brand>
      <Form inline>
        <FormControl placeholder="Search" />
      </Form>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown title="User Settings" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Setting</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Signout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
