import React from "react";
import { Col, Container, Row, Jumbotron, Button, Image,Form } from "react-bootstrap";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import AllCourses from "../../Courses/AllCourses/AllCourses";
import CourseCard from "../../Courses/CourseCard/CourseCard";
import CourseCardHome from "./CourseCardHome";
import bg from "../../../assets/images/bg.jpg";
const Home = () => {
  const allCourses = useLoaderData();

  return (
    <div className="">
      <div className="hero d-flex text-center align-items-center p-5">
        <div className="hero-info w-100 mx-auto border p-5">
        <h2 className="fs-1 p-2  text-warning">
         Moulding Tomorrow's Future
       </h2>
        <Form className="search-con d-flex mx-auto mt-1">
              <Form.Control
                type="search"
                placeholder="Search Your Courses"
                className=""
                aria-label="Search"
              />
              <Button variant="dark">Search</Button>
            </Form>
        {/* <h1 className="fs-1 m-4 text-dark">Master Academy</h1> */}
       

       <div className="btn-container m-1">
         <Link to="/courses" className="btn bg-primary text-white p-3 m-2">
           Courses
         </Link>
         <Link to="/" className="btn bg-success text-white p-3 ms-2 ">
         Start Learning
        </Link>
     </div>
        </div>
      </div>
      <h3 className="text-center bg-success my-4 text-warning p-3">
        Our all Courses
      </h3>
      <div className="container mx-auto  courseContainer">
        {allCourses.map((course) => (
          <CourseCardHome key={course.id} course={course}></CourseCardHome>
        ))}
      </div>
    </div>
  );
};

export default Home;

// <Container className="hero pr-0  pt-0">
// <Row className="">
//   <Col sm={6} xl={12} className='border'>
//     <div className="">
//       <h1 className="fs-1 m-4 text-warning">Master Academy</h1>
//       <h2 className="fs-3 m-3 text-danger">
//         Moulding Tomorrow's Future
//       </h2>

//       <div className="btn-container m-5">
//         <Link to="/courses" className="btn bg-white text-success p-3 m-2">
//           Courses
//         </Link>
//         <Link to="/" className="btn bg-success text-white p-3 ms-2 ">
//           Start Learning
//         </Link>
//       </div>
//     </div>
//     </Col>

//   {/* <Col sm={6} xl={6}>
//     <Image
//       width="129%"
//       height="500"
//       src={bg}
//     ></Image>
//   </Col> */}
// </Row>

// </Container>
