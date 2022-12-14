import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./NavbarTop.css";
import { useEffect } from "react";

const NavbarTop = () => {
 
   
  return (
    <div className="container top">
      <Navbar
        collapseOnSelect
        className="mb-1"
        expand="lg"
        bg="white"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto fs-4">
              <Nav.Link className=" me-5" as={Link} to="">
                All
              </Nav.Link>

              <Nav.Link className=" me-5" as={Link} to="ssc">
                SSC
              </Nav.Link>
              <Nav.Link
                className=" me-5"
                
                as={Link}
                to="hsc"
              >
                HSC
              </Nav.Link>
            </Nav>
            <Form className="d-flex mx-5 px-5">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarTop;
