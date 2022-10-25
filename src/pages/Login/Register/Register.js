import React, { useContext, useState } from "react";
import { ButtonGroup, Col, Container, Image, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import account1 from "../../../assets/images/account1.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
const Login = () => {
  const [error, setError] = useState("");
  // const [passwordError, setPasswordError] = useState('');
  const [accept, setAccept] = useState(false);
  const { createUser, verifyEmail, updateUserProfile } =
    useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    console.log(name, photoURL, email, password, confirmPassword);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        // handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email");
      })
      .catch((err) => {
        console.error(err.message);
        setError(err.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleAccept = (event) => {
    setAccept(event.target.checked);
  };
  // }
  return (
    <Container className="">
      <Row>
        <Col lg="6" className="ms-0 ps-0">
          <Form
            onSubmit={handleSubmit}
            className="container w-100 border p-3 rounded bg-secondary text-center"
          >
            <h2 className="text-center">Create an account</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Your Full Name"
                name="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Your Photo URL"
                name="photoURL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Username or Email"
                name="email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Your Password"
                required
              />
            </Form.Group>
            {/* <Form.Text className="text-danger">{passwordError}</Form.Text> */}
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
                    <Link className="text-warning ms-2" to="/terms">
                      Terms and conditions
                    </Link>
                  </>
                }
              />
            </Form.Group>
            <Form.Text className="text-danger">{error}</Form.Text>
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
                className="d-flex justify-content-center align-items-center w-75 "
                variant="success"
              >
                {" "}
                <FaGoogle></FaGoogle> Continue with Google
              </Button>

              <Button
                className="d-flex justify-content-center align-items-center w-75"
                variant="dark"
              >
                {" "}
                <FaGithub className=""></FaGithub> Continue with Github
              </Button>
            </ButtonGroup>
          </Form>
        </Col>
        <Col lg="6" className="me-0 pt-5">
          <Image src={account1} width="550" height="450" className=""></Image>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

//   if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
//     setPasswordError('Please provide at least two uppercase');
//     return;
// }
// if (password.length < 6) {
//     setPasswordError('Please should be at least 6 characters.');
//     return;
// }
// if (!/(?=.*[!@#$&*])/.test(password)) {
//     setPasswordError('Please add at least one special character');
//   return;
// }
// setPasswordError('');
// if (password === confirmPassword) {
//     setError("Password did not match,Try Again")
// }
// else {
