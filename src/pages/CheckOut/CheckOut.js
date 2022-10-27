import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import {Link,useLoaderData,useNavigate} from 'react-router-dom'

const CheckOut = () => {
    const courseInfo = useLoaderData();
    const { id, course_prize,course_name, course_img } = courseInfo;
    const navigate = useNavigate();
    const handleCheckOut = () => {
        navigate('/');
        toast.success("Thank you for checking out!!!")
    }
    return (
        <div className="container my-5 mb-5 ">
            <h2 style={{ color: "black", borderBottom: "5px solid black", marginBottom:'30px',width:'50%'}}>Check-Out Courses</h2>
        <Card className="mx-auto" style={{ width: '350px' ,border: '1px solid orange'}}>
      <Card.Img variant="top" src={course_img} />
      <Card.Body>
        {/* <Card.Title className=" fs-4 text-primary">{course_name}</Card.Title> */}
        <Form className="">
            <Form.Control 
             
              defaultValue={`Course Title: ${course_name}`}
              className="bg-success text-white m-2"
              aria-label="Search" readOnly
            />
            <Form.Control
             
              defaultValue={`Course Price: ${course_prize}`}
              className="m-2" readOnly
            />
            <Form.Control
             
              defaultValue={`VAT: ${course_prize * .15}`}
              className="m-2"
              aria-label="Search" readOnly
            />
            <Form.Control
             
              defaultValue={`Total Price: ${(parseInt(course_prize) + (parseInt(course_prize)*0.15))}`}
              className="m-2"
              aria-label="Search" readOnly
            />
            
          </Form>
       <Link  to='/'><Button onClick={handleCheckOut} variant="primary" >Confirm Order</Button></Link> 
      </Card.Body>
    </Card>
        </div>
    );
};

export default CheckOut;