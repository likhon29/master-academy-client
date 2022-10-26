import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {
    const { id,course_prize,course_name,course_group,course_duration,lecture_quantity, course_img } = course;
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course_img} />
      <Card.Body>
                <Card.Title className=" fs-4 text-primary text-center">{course_name}</Card.Title>
        
            <ul className="text-left">
              <li>For {course_group }-2023</li>
              <li>Course Duration: { course_duration}</li>
              <li>No of Lecture: { lecture_quantity}</li>
         </ul>
          
          <div className="container d-flex justify-content-between">
            <h3 style={{color:'orangered'}} className="mt-1 fs-5">TK.{ course_prize}</h3> 
            <Link to={`${id}`}><Button variant="primary" >Details</Button></Link> 
        </div>
       
      </Card.Body>
    </Card>
    );
};

export default CourseCard;