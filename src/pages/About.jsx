// import React from 'react'
import aboutImg from "../assets/about.avif";
import FeatureCard from "../components/FeatureCard";
import { LuBookOpenCheck } from "react-icons/lu";
import { LuUsersRound } from "react-icons/lu";
import { LuBriefcaseBusiness } from "react-icons/lu";

const About = () => {
  const features = [
    {
      icon: <LuBookOpenCheck />,
      title: "Structured Learning",
      description:
        "Courses are organized step by step so students can move from fundamentals to real projects with confidence.",
    },
    {
      icon: <LuUsersRound />,
      title: "Supportive Mentors",
      description:
        "Learners get guidance on project building, debugging, portfolio improvement, and interview preparation.",
    },
    {
      icon: <LuBriefcaseBusiness />,
      title: "Career Focus",
      description:
        "The syllabus emphasizes practical skills used by web developers, full-stack engineers, and junior analysts.",
    },
  ];

  return (
    <>
      <section className="px-2 px-md-5 py-5">
        <div className="container mt-5">
          <div className="row align-items-center gy-5">
            <div className="col-12 col-lg-6">
              <p className="text-danger mb-2" style={{ fontWeight: "800" }}>
                ABOUT US
              </p>
              <h2
                className="mb-4 mb-lg-5"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                  fontWeight: "800",
                  maxWidth: "650px",
                  width: "100%",
                }}
              >
                Training built around real developer work.
              </h2>
              <p
                style={{
                  fontSize: "clamp(1.1rem, 2vw, 1.375rem)",
                  fontWeight: 400,
                  color: "#5d6875",
                  maxWidth: "650px",
                  width: "100%",
                }}
              >
                SkillForge Academy helps students and early professionals learn
                job-ready technical skills through practical projects, mentor
                guidance, and focused course paths.
              </p>
              <p style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", maxWidth: "600px", width: "100%" }}>
                Our programs cover modern web development, backend frameworks,
                frontend design, data tools, and deployment basics so learners
                understand how complete applications are planned, built, and
                shipped.
              </p>
            </div>

            <div className="col-12 col-lg-6">
              <div
                className="overflow-hidden rounded-4 shadow-lg animate-fade-in"
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  height: "clamp(300px, 40vw, 480px)",
                }}
              >
                <img
                  src={aboutImg}
                  alt=""
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pb-5">
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.title} className="col-12 col-md-4">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
