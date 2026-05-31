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
              fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
              fontWeight: "800",
            }}
          >
            Start with a practical learning path
          </h2>
        </div>

        <div className="row g-4 px-2 px-md-5">
          {coursesData.slice(0, 3).map((course) =>(
            <div key={course.id} className="col-12 col-md-6 col-lg-4">
          <CourseCard course={course}/>
        </div>
          ))}

        </div>
        
      </section>
    </>
  );
};

export default CardSection;
