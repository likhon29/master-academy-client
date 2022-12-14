import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import LeftNav from "../LeftNav/LeftNav";
import './CourseContainer.css'
const CourseContainer = () => {
  const courses = useLoaderData();
  console.log(courses);
    // const sscCourses = courses.filter(course => course.category_name === 'ssc');
    // console.log(sscCourses);
    return (
    <Container className="mt-4">
     
      <Row >
        <Col lg="9">
        <h3 style={{ color: "black", borderBottom: "5px solid black", marginBottom:'30px',width:'50%'}}>All Courses Category:{courses.length}</h3>
      <div className="course-container">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
        </Col>
          <Col lg="3">
          <h3 style={{ color: "black", borderBottom: "5px solid black", marginBottom:'30px',width:'50%'}}>Course List</h3>
            {
              courses.map((course) => <LeftNav key={course.id} course={course}></LeftNav> )
            }
          
      
        </Col>
      </Row>
    </Container>
    );
};

export default CourseContainer;