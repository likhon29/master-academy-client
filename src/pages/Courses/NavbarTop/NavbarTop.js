import React, { useContext } from 'react';
import {useLoaderData} from 'react-router-dom'
import { Form, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NavbarTop.css'
const NavbarTop = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);
    return (
        <div className="container top">
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="white" variant="light">
            <Container>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto fs-4">
                        <Nav.Link className='mx-5' as={Link} to="allCourses">All Courses</Nav.Link>
                        <Nav.Link className='mx-5' as={Link} to="ssc">SSC</Nav.Link>
                        <Nav.Link className='mx-5' as={Link} to="hsc">HSC</Nav.Link>
                        
                        {/* <NavDropdown  className='mx-4 text-danger' title="SSC" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="ssc/science">Science</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="ssc/humanities">
                                Humanities
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="ssc/businessStudies">Business Studies</NavDropdown.Item>
                            
                            
                        </NavDropdown>
                        <NavDropdown className='mx-5 text-danger' title="HSC" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Science</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Humanities
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Business Studies</NavDropdown.Item>
                        </NavDropdown> */}
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