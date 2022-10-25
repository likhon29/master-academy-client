import React, { useContext, useState } from "react";
import { ButtonGroup, Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import pic from '../../../assets/images/login.jpg'
const Login = () => {
  const [error, setError] = useState("");
  return (
    
        <Container className="my-5 py-5" >
        <Row>
          <Col lg="6" className='me-0 pe-0'>
            <Image src={pic} width="600" height="400" className=""></Image>
                  </Col>
                  
          <Col lg="6" className="ms-0 ps-0">
          <Form
        
        className="container w-100 border  p-3 rounded bg-secondary text-center"
      >
        <h2 className="text-center">Login Now!</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Username or Email Address"
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
              </Form.Group>
              <Form.Text className="text-danger fs-3">{error}</Form.Text>
        <Form.Group
          className="d-flex justify-content-between text-start text-white mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label={<> Remember Me</>} />
          <Form.Text>
            <Link to="/" className="text-warning me-3">
              Forgot Password
            </Link>
          </Form.Text>
        </Form.Group>
        <Button variant="warning" className="w-75 " type="submit">
          Login
        </Button>{" "}
        <br />
        <Form.Text className="text-dark">
          Don't have an account?{" "}
          <Link className="text-warning btn-link" to="/register">
            Create an account
          </Link>
        </Form.Text>{" "}
        <br />
        <div className="d-flex w-75 mx-auto text-white">
          <hr className="ms-5 w-50 d-inline" />
          <p className="mx-2">Or</p>
          <hr className="w-50 me-5" />
        </div>
        <ButtonGroup sm-vertical>
          <Button
            className="d-flex justify-content-center align-items-center w-50 "
            variant="success"
          >
            {" "}
            <FaGoogle></FaGoogle> Continue with Google
          </Button>

          <Button
            className="d-flex justify-content-center align-items-center w-50"
            variant="dark"
          >
            {" "}
            <FaGithub></FaGithub> Continue with Github
          </Button>
          {/* <Button
            className="d-flex justify-content-center align-items-center w-50"
            variant="primary"
          >
            {" "}
            <FaFacebook></FaFacebook> Continue with Facebook
          </Button> */}
        </ButtonGroup>
      </Form>
          </Col>
          
        </Row>
      </Container>

     
    
  );
};

export default Login;
