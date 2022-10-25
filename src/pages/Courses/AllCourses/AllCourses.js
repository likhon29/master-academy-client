import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
const AllCourses = () => {
  const allCourses = useLoaderData();

  return (
    <div>
      <h1>All Courses Category:{allCourses.length}</h1>
      <div className="course-container">
        {allCourses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
