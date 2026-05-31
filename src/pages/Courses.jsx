// import React from 'react'
import coursesData from "../data/coursesData";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  return (
    <>
      <section className="p-5">
        <div className="container mt-5">
          <p
            className="mb-2"
            style={{ fontWeight: "800", color: "#5d6875", fontSize:"20px"}}
          >
            COURSE CATALOG
          </p>
          <h1
            style={{
              fontSize:"70px",
              fontWeight: "800",
              width:"650px"
            }}
          >
            Choose your next tech course
          </h1>
          <p style={{fontSize:"22px", color: "#5d6875"}}>Each course includes guided lessons, real projects, interview preparation, and a clear path from basics to portfolio-ready work.</p>
        </div>

        <div className="row g-4 ps-5 pe-5 mt-3">
          {coursesData.map((course) =>(
            <div key={course.id} className="col-lg-4">
          <CourseCard course={course}/>
        </div>
          ))}

        </div>

      </section>
    </>
  )
}

export default Courses
