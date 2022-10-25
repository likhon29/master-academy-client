import React from "react";
import { Col, Container, Row, Jumbotron, Button, Image } from "react-bootstrap";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
const Home = () => {
  const allCourses = useLoaderData();
  console.log(allCourses);
  return (
    <div className="home pt-5">
      <Container className="d-flex pr-0  pt-5">
        <Row className="justify-content-center align-items-center">
          <Col sm={4} xl={6}>
            <div className="container  ">
              <h1 className="fs-1 m-4 text-warning">Master Academy</h1>
              <h2 className="fs-3 m-3 text-danger">
                Moulding Tomorrow's Future
              </h2>

              <div className="btn-container m-5">
                <Link className="btn bg-white text-success p-3 w-25">
                  Courses
                </Link>
                <Link className="btn bg-success text-white p-3 ms-2 ">
                  Start Learning
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={6} xl={6}>
            <Image
              width="600"
              height="400"
              src="https://shikho.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fcross-border-education-technologies-pte-ltd%2Fimage%2Fupload%2Fv1656655473%2Fpma7gkdj9tmieyhazugz.png&w=828&q=75"
            ></Image>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
