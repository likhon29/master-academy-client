import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftNav from "../pages/Courses/LeftNav/LeftNav";

const CourseContainerLayOut = () => {
    return (
        <Container>
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

export default CourseContainerLayOut;