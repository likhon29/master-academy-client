import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const CourseCard = ({ course }) => {
    const { course_name, course_img } = course;
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course_img} />
      <Card.Body>
                <Card.Title className=" fs-4 text-primary">{course_name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
};

export default CourseCard;