import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import LeftNav from "../LeftNav/LeftNav";
const AllCourses = () => {
  const allCourses = useLoaderData();
  const all= allCourses.filter(course => (course.category_name === 'ssc' ||  course.category_name === 'hsc'));
  return (
    
      <Container className="mt-4">
     
      <Row>
        <Col lg="9">
        <h1>All Courses Category:{allCourses.length}</h1>
      <div className="course-container">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
        </Col>
          <Col lg="3">
          <h5>Course List</h5>
            {
              all.map((course) => <LeftNav key={course.id} course={course}></LeftNav> )
            }
          
      
        </Col>
      </Row>
    </Container>
     
  
  );
};

export default AllCourses;
