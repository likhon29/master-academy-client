import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftNav from "../pages/Courses/LeftNav/LeftNav";
import NavbarTop from "../pages/Courses/NavbarTop/NavbarTop";
const CourseLayout = () => {
  return (
    <Container>
      <Row>
        <NavbarTop></NavbarTop>
      </Row>
      <Row>
        <Col lg="9">
          <Outlet></Outlet>
        </Col>
        <Col lg="3">
          <LeftNav></LeftNav>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseLayout;
