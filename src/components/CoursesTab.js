import React from "react";
import CourseCard from "./CourseCard";

function CoursesTab({ data }) {
  return (
    <div className="category-container">
      <div className="banner">
        <h1>Expand your career opportunities with Python</h1>
        <p className="banner-content">
          Take one of Udemy’s range of Python courses and learn how to code
          using this incredibly useful language. Its simple syntax and
          readability makes Python perfect for Flask, Django, data science, and
          machine learning. You’ll learn how to build everything from games to
          sites to apps. Choose from a range of courses that will appeal to both
          beginners and advanced developers alike.
        </p>
        <button className="fnt-sm" type="submit">
          Explore Python
        </button>
      </div>
      <div className="courses-container">
        {data.map((course) => (
          <CourseCard
            id={course.id}
            title={course.title}
            author={course.author}
            image={course.image}
            price={course.price}
            rating={course.rating}
            people={course.people}
          ></CourseCard>
        ))}
      </div>
    </div>
  );
}

export default CoursesTab;
