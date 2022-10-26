import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Pdf from "react-to-pdf";
import { useLoaderData,Link } from "react-router-dom";
import LeftNav from "../LeftNav/LeftNav";
import './CourseDetails.css'
import { createRef } from "react";
const ref = createRef();
const CourseDetail = () => {
  const courseInfo = useLoaderData();
  const {
    id,
    course_prize,
    course_name,
    course_group,
    course_duration,
    lecture_quantity,
    course_img,course_mentor
  } = courseInfo;
  return (
    <div className="container">
       <h3 style={{ textAlign: "left" }}>Course Details</h3>
      
      
      
      <Container  className="details-container">
        <Row>
          <Col lg="12"> <Card className="mx-auto  w-50 ">
          <div className="header d-flex  justify-content-center  my-2">
          <Card.Title className="text-center fs-2 text-dark">{course_name}</Card.Title> <Pdf targetRef={ref} filename="course-details.pdf">
        {({ toPdf }) => <button className="btn btn-danger mx-2 text-white" onClick={toPdf}>About</button>}
      </Pdf>
       </div>
          
        <Card.Img className="border-rounded" variant="top" src={course_img} />
        <Card.Body ref={ref}>
              <div  className="features d-flex justify-content-between text-success">
              <Card.Text >
                <span style={{color:"black", borderBottom:'3px solid '}}>Features</span>  
                  <ul>
                    <li>
                    Offers Convenience And Flexibility
                    </li>
                    <li>
                    High-Quality Student-Tutor Interactions
                    </li>
                    <li>
                    More Cost-Effective
                    </li>
                    <li>
                    As need as provide class note, take quiz etc..
                    </li>
                  </ul>
                </Card.Text>
                <Card.Text>
                <span style={{color:"black", borderBottom:'3px solid '}}>Course Info</span>
                  <ul>
            <li>For {course_group} - 2023</li>
            <li>Course Duration: {course_duration}</li>
            <li>No of Lecture: {lecture_quantity}</li>
            <li>Price: {course_prize} TK</li>
          </ul>
          </Card.Text>
          </div>
          <span style={{color:"black", borderBottom:'3px solid '}}>Mentors</span>

          <div  className="features d-flex justify-content-between">
                <Card.Text className="features d-flex justify-content-between text-success" >
                  
                  {
                    course_mentor.map(m => <div>
                      <Image src={m.img} className="mx-4  fs-5"
                                style={{ height: "40px", marginTop: "7px",borderTop: "1px solid orangered"}}
                                roundedCircle></Image>
                      <span style={{color:"orangered"}} >{ m.name}</span>
                    </div>)
                 }
                </Card.Text>
                <Card.Text>
                <Link className="text-center" to={`/enroll/${courseInfo.id}`}><Button style={{backgroundColor: 'orangered', color:'white',}} variant="">Get premium access</Button></Link>
          </Card.Text>
          </div>
          
          
        </Card.Body>
      </Card></Col>
          
          
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetail;
