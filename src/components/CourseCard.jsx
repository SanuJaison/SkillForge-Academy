// import React from 'react'
import { GoClock } from "react-icons/go";
import { FaSignal } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

const CourseCard = ({ course }) => {
  return (
    <>
      <div className="card border-0 shadow-sm h-100 course-card">

      <img
        src={course.image}
        alt={course.title}
        className="card-img-top"
        style={{
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div className="card-body d-flex flex-column">

        <div className="d-flex justify-content-between align-items-start mb-3">
          <h4
            className="fw-bold mb-0"
            style={{ color: "#0f172a" }}
          >
            {course.title}
          </h4>

          <span
            className="fw-bold"
            style={{
              color: "#16a34a",
              fontSize: "1.1rem",
            }}
          >
            {course.price}
          </span>
        </div>

        <p
          className="text-secondary"
          style={{
            lineHeight: "1.7",
          }}
        >
          {course.description}
        </p>

        <div className="d-flex align-items-center gap-2 mb-3">
          <GoClock />
          <span style={{fontWeight: 700}}>
            {course.duration}
          </span>
        </div>

        <div className="mb-4">
          <div className="d-flex align-items-center gap-2 mb-3">
            <FaSignal />
            <span style={{fontWeight: 700}}>
              {course.level}
            </span>
          </div>

          <div className="d-flex flex-wrap gap-2 mt-2">
            {course.technologies.map((tech) => (
              <span
                key={tech}
                className="badge bg-light text-dark border" style={{fontSize: "14px"}} 
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button
          className="btn btn-success w-100 mt-auto p-2" style={{fontWeight: 700, fontSize: "18px", display: "flex", justifyContent: "center", alignItems:"center", gap:10}}
        >
          <FiShoppingBag /> Buy Course
        </button>

      </div>
    </div>
    </>
  );
};

export default CourseCard;
