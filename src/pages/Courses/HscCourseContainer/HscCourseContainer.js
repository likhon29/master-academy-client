import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import LeftNav from "../LeftNav/LeftNav";
const HscCourseContainer = () => {
    const [courses, setCourses] = useState([]);
    // const sscCourses = useLoaderData();
    console.log(courses);
    useEffect(() => {
      fetch("https://master-academy-server.vercel.app/allCourses")
        .then((res) => res.json())
        .then((data) => {
          const hscCourses = data.filter(
            (course) => course.category_name === "hsc"
          );
          setCourses(hscCourses);
        });
    }, []);
    return (
      <Container className="mt-4">
        <Row>
          <Col lg="9">
            <h4 style={{ color: "black", borderBottom: "5px solid black", marginBottom:'30px',width:'50%'}}>Course of HSC:{courses.length}</h4>
  
            <div className="course-container">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course}></CourseCard>
              ))}
            </div>
          </Col>
          <Col lg="3">
            <h5>Course List</h5>
            {courses.map((course) => (
              <LeftNav key={course.id} course={course}></LeftNav>
            ))}
          </Col>
        </Row>
      </Container>
    );
};

export default HscCourseContainer;