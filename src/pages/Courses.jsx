// import React from 'react'
import coursesData from "../data/coursesData";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <>
      <section className="px-2 px-md-5 py-5">
        <div className="container mt-5">
          <p
            className="mb-2"
            style={{ fontWeight: "800", color: "#5d6875", fontSize:"20px"}}
          >
            COURSE CATALOG
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 4.375rem)",
              fontWeight: "800",
              maxWidth: "650px",
              width: "100%",
            }}
          >
            Choose your next tech course
          </h1>
          <p style={{fontSize:"22px", color: "#5d6875"}}>Each course includes guided lessons, real projects, interview preparation, and a clear path from basics to portfolio-ready work.</p>
        </div>

        <div className="row g-4 px-2 px-md-5 mt-3">
          {coursesData.map((course) =>(
            <div key={course.id} className="col-12 col-md-6 col-lg-4">
          <CourseCard course={course}/>
        </div>
          ))}

        </div>

      </section>
    </>
  )
}

export default Courses
