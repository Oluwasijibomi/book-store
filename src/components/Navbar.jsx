import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <div>

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">My Book-Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Browse</Nav.Link>
      
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

      </div>
    )
  }
}

export default NavBar;