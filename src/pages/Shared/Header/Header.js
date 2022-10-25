import React, { useContext } from "react";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
const Header = () => {
    return (
        <div className=" bg-secondary ">
      {["lg"].map((expand) => (
  <Navbar key={expand} expand={expand} className=" container mb-3 ">
    <Container fluid>
      <Navbar.Brand className=" text-white" as={Link} to="/">
        <img src={logo} width="200px" height="100px" alt="" />{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
      <Navbar.Offcanvas
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            Master Academy
          </Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          
          <Nav className=" justify-content-end flex-grow-1 px-5 fs-5">
            <Nav.Link className=" me-5 " as={Link} to="/">
              Home
            </Nav.Link>
            {/* <Nav.Link className="text-white me-5"  as={Link} to="/news">News</Nav.Link> */}
            <Nav.Link
              className=" me-5"
              as={Link}
              to="/courses"
            >
              Courses
            </Nav.Link>
            <Nav.Link className=" me-5" as={Link} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link className=" me-5" as={Link} to="/blogs">
              Blog
            </Nav.Link>
               <Nav.Link className=" text-white btn btn-primary px-5" href="/login">Login</Nav.Link>
          
            <Nav.Link className="text-white  me-5">
              {/* {user?.uid ? (
                <>
                  <span className="text-">{user?.displayName}</span>

                  <Button
                    className="ms-2"
                    variant="danger"
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link
                    className=" text-white btn btn-primary pt-0 px-5"
                    as={Link}
                    to="/login"
                  >
                    Login
                  </Nav.Link>
                </>
              )} */}
            </Nav.Link>
          </Nav>
         
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
))}
    </div>
    );
};

export default Header;