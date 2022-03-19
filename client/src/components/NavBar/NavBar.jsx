import React from "react";
import { SiFreelancer } from "react-icons/si";

// We import bootstrap to make our application look better.

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./navBar.css";

// Here, we display our Navbar
export default function NavBar() {
  return (
    <div className="containerNavbar">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <h1>
              <SiFreelancer /> Free my mind
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/about"><h5>About</h5></Nav.Link>
              <Nav.Link href="/notes"><h5>Notes</h5></Nav.Link>
              <Nav.Link href="/todolist"><h5>To Do List</h5></Nav.Link>
              <Nav.Link href="/blog"><h5>Blog</h5></Nav.Link>
              <Nav.Link href="/login"><h5>Login</h5></Nav.Link>
              <Nav.Link href="/register"><h5>Register</h5></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
