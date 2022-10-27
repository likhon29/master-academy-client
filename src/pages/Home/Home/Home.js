import React from "react";
import { Col, Container, Row, Jumbotron, Button, Image } from "react-bootstrap";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import AllCourses from "../../Courses/AllCourses/AllCourses";
import CourseCard from "../../Courses/CourseCard/CourseCard";
import CourseCardHome from "./CourseCardHome";
import bg from '../../../assets/images/bg.jpg'
const Home = () => {
  const allCourses = useLoaderData();
  
  return (
    <div className="">
<div className="hero">
      <Container className="hero d-flex px-5  pr-0  pt-0">
        <Row className=" justify-content-center align-items-center w-100 ">
          <Col sm={6} xl={6}>
            <div className="container  ">
              <h1 className="fs-1 m-4 text-warning">Master Academy</h1>
              <h2 className="fs-3 m-3 text-danger">
                Moulding Tomorrow's Future
              </h2>

              <div className="btn-container m-5">
                <Link to="/courses" className="btn bg-white text-success p-3 m-2">
                  Courses
                </Link>
                <Link to="/login" className="btn bg-success text-white p-3 ms-2 ">
                  Start Learning
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={6} xl={6}>
            <Image
              width="1000"
              height="500"
              src={bg}
            ></Image>
          </Col>
        </Row>
        

       
       
      </Container>
      
      </div>
      <h3 className="text-center bg-success my-4 text-warning p-3">Our all Courses</h3>
      <div className="container mx-auto  courseContainer">
       
        {
          allCourses.map(course =><CourseCardHome key={course.id} course={course}></CourseCardHome>)
        }
        </div>
    </div>
    
  );
};

export default Home;
