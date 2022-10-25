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
const Header = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };
  console.log(user)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="bg-secondary mb-0 pb-0">
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" container mb-3 ">
          <Container fluid>
            <Navbar.Brand className=" text-white" as={Link} to="/">
              <img src={logo} width="300px" height="100px" alt="" />{" "}
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
                  <Nav.Link className=" me-5" as={Link} to="/courses">
                    Courses
                  </Nav.Link>
                  <Nav.Link className=" me-5" as={Link} to="/faq">
                    FAQ
                  </Nav.Link>
                  <Nav.Link className=" me-5" as={Link} to="/blogs">
                    Blog
                  </Nav.Link>
                  <DarkModeSwitch className="mt-2 me-5"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={33}
                  />
                  <Link to="/profile">
                    {user ? <> {
                      user?.photoURL ?
                      <Image
                          style={{ height: '30px' }}
                          roundedCircle
                          src={user?.photoURL}>
                      </Image>
                      : <FaUser className="fs-2 mt-2"></FaUser>

                    }
                      
                    </>
                      :
                      <></>
                     
                            }
                        </Link>
                  <Nav.Link className="text-white  me-5">
                    <>
                    {user?.uid ? (
                      <>
                        <span className="text-">{user?.displayName}</span>

                          <Button onClick={handleLogOut} className="ms-2" variant="danger">
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
                    )}
                    </>
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
