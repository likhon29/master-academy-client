import React from 'react';
import {useLoaderData} from 'react-router-dom'
import CourseCard from '../CourseCard/CourseCard';
import './CourseContainer.css'
const CourseContainer = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            <h1>Number of Courses:{courses.length}</h1>
            <div className="course-container">
            {
                courses.map((course) => <CourseCard key={course.id} course={course}></CourseCard>)
            }
           </div>
        </div>
    );
};

export default CourseContainer;