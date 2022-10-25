import React, { useContext, useState } from "react";
import { ButtonGroup, Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import account1 from '../../../assets/images/account1.png'
const Login = () => {
    const [error, setError] = useState("");
  const [accept, setAccept] = useState(false);

    const handleAccept = (event) => {
        setAccept(event.target.checked);
      };
  return (
    
        <Container className="" >
        <Row>
          
                  
          <Col lg="6" className="ms-0 ps-0">
          <Form
       
        className="container w-100 border p-3 rounded bg-secondary text-center"
      >
        <h2 className="text-center">Create an account</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Your First Name"
            name="fname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter Your Last Name"
            name="lname"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Username or Email"
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
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="cpassword"
            placeholder="Confirm Your Password"
          />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text>
        <Form.Group
          className="text-start text-white mb-3"
          controlId="formBasicCheckbox"
        >
          <Form.Check
            type="checkbox"
            onClick={handleAccept}
            label={
              <>
                Accept
                <Link className="text-warning" to="/terms">
                  Terms and conditions
                </Link>
              </>
            }
          />
        </Form.Group>
        {/* <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text> <br/> */}
        <Button
          variant="warning"
          className="w-75 "
          type="submit"
          disabled={!accept}
        >
          Create an account
        </Button>{" "}
        <br />
        <Form.Text className="text-dark">
          Already have an account?{" "}
          <Link className="text-warning btn-link" to="/login">
            Login
          </Link>
        </Form.Text>{" "}
        <br />
        <div className="d-flex w-75 mx-auto text-white">
          <hr className="ms-5 w-50 d-inline" />
          <p className="mx-2">Or</p>
          <hr className="w-50 me-5" />
        </div>
        <ButtonGroup>
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
          <Col lg="6" className='me-0 pt-5'>
            <Image src={account1} width="550" height="450" className=""></Image>
                  </Col>
        </Row>
      </Container>

     
    
  );
};

export default Login;
