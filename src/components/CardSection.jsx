// import React from 'react'
import coursesData from "../data/coursesData";
import CourseCard from "./CourseCard";


const CardSection = () => {
  return (
    <>
      <section className="p-5">
        <div className="container"> 
          <p
            className="text-danger mb-2"
            style={{ fontWeight: "800"}}
          >
            POPULAR COURSES
          </p>

          <h2
            className="mb-5"
            style={{
              fontSize: "50px",
              fontWeight: "800",
            }}
          >
            Start with a practical learning path
          </h2>
        </div>

        <div className="row g-4 ps-5 pe-5">
          {coursesData.slice(0, 3).map((course) =>(
            <div key={course.id} className="col-lg-4">
          <CourseCard course={course}/>
        </div>
          ))}

        </div>
        
      </section>
    </>
  );
};

export default CardSection;
