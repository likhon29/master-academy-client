import React, { useContext, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Profile = () => {
  const {user,updateUserProfile} = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const photoURLRef = useRef(user?.photoURL);

  const handleSubmit = event => {
      event.preventDefault();
    console.log(photoURLRef.current.value);
  
  }

  const handleNameChange = event =>{
      setName(event.target.value)
  }
  return (
    <div className="container">
       <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Link to="/"><Button  variant="primary" type="submit">
                Submit
            </Button></Link>
            
        </Form>
    </div>
  );
};

export default Profile;
