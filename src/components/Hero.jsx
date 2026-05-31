// import React from 'react'

import { Link } from "react-router-dom";
import heroImg from "../assets/hero.avif";
import heroFront from "../assets/herofront.avif";

const Hero = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          marginTop: "-80px",
          position: "relative",
        }}
        className="d-flex align-items-center"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(255,255,255,0.85)",
          }}
        ></div>

        <div className="container position-relative">
          <div
            className="row align-items-center gy-5"
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
          >
            <div className="col-lg-6">
              <p
                className="mb-3 text-danger"
                style={{
                  fontWeight: "800",
                }}
              >
                LIVE CAREER-FOCUSED TRAINING
              </p>

              <h1
                className=" lh-1"
                style={{
                  fontSize: "clamp(2rem, 5.5vw, 5rem)",
                  color: "#0f172a",
                  fontWeight: 800,
                }}
              >
                Build the skills to become a full-stack developer.
              </h1>

              <p
                className="mt-4"
                style={{
                  fontSize: "1.4rem",
                  color: "#475569",
                  lineHeight: "2.2rem",
                  maxWidth: "700px",
                }}
              >
                Explore structured courses in MERN Stack, Python Full Stack,
                Java Full Stack, frontend development, analytics, and cloud
                fundamentals.
              </p>

              <div className="d-flex gap-3 mt-4 flex-wrap">
                <Link
                  to="/courses"
                  className="btn btn-success px-4 py-3 fw-bolder fs-5"
                >
                  View Courses →
                </Link>

                <Link
                  to="/about"
                  className="btn btn-outline-dark px-4 py-3 fw-bolder fs-5"
                >
                  About Us
                </Link>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center">
              <div
                className="overflow-hidden rounded-4 shadow-lg"
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  height: "clamp(300px, 45vw, 530px)",
                }}
              >
                <img
                  src={heroFront}
                  alt=""
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
