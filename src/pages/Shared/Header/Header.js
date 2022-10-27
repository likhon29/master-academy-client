import React, { useContext, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo1.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Header.css";
const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName}
    </Tooltip>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="header-container ">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" container mb-3 ">
          <Container fluid>
            <Navbar.Brand className=" text-white" as={Link} to="/">
              <img src={logo} width="300px" height="100px" alt="" />{" "}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} /> */}
            {/* <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            > */}
              <Navbar.Collapse id="responsive-navbar-nav">
              {/* <Offcanvas.Body> */}
                <Nav className=" justify-content-end flex-grow-1 px-5 fs-5">
                  <Nav.Link className=" me-5" as={Link} to="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className=" me-5" as={Link} to="/courses">
                    Courses
                  </Nav.Link>
                  <Nav.Link className=" me-5" as={Link} to="/faq">
                    FAQ
                  </Nav.Link>
                  <Nav.Link className=" me-5" as={Link} to="/blogs">
                    Blog
                  </Nav.Link>
                  <DarkModeSwitch
                    className="mt-2 me-5"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={33}
                  />
                  <Link to="/profile">
                    {user ? (
                      <>
                        {" "}
                        <OverlayTrigger
                          placement="right"
                          delay={{ show: 50, hide: 400 }}
                          overlay={renderTooltip}
                        >
                          {user?.photoURL ? (
                            <>
                              <Image
                                className="fs-5"
                                style={{ height: "40px", marginTop: "7px" }}
                                roundedCircle
                                src={user?.photoURL}
                                title={user?.displayName}
                              ></Image>
                            </>
                          ) : (
                            
                             
                               
                            
                              <FaUser
                                title={user?.displayName || 'Unknown'}
                                className="fs-2 mt-2"
                              ></FaUser>  
                            
                          )}
                        </OverlayTrigger>
                      </>
                    ) : (
                      <></>
                    )}
                  </Link>
                  {/* <Nav.Link className="text-white  me-5"> */}
                  <>
                    {user?.uid ? (
                      <>
                        {/* <span className="text-">{user?.displayName}</span> */}

                        <Button
                          onClick={handleLogOut}
                          className="ms-2"
                          variant="danger"
                        >
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Nav.Link
                          className=" text-white btn btn-primary py-auto px-5"
                          as={Link}
                          to="/login"
                        >
                          Login
                        </Nav.Link>
                      </>
                    )}
                  </>
                  {/* </Nav.Link> */}
                </Nav>
              {/* </Offcanvas.Body> */}
            {/* </Navbar.Offcanvas> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Header;
