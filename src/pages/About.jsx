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
      <section className="p-5">
        <div className="container mt-5 d-flex gap-2">
          <div>
            <p className="text-danger mb-2" style={{ fontWeight: "800" }}>
              ABOUT US
            </p>
            <h2
              className="mb-5"
              style={{
                fontSize: "50px",
                fontWeight: "800",
                width: "650px",
              }}
            >
              Training built around real developer work.
            </h2>
            <p
              style={{
                fontSize: "22px",
                fontWeight: 400,
                color: "#5d6875",
                width: "650px",
              }}
            >
              SkillForge Academy helps students and early professionals learn
              job-ready technical skills through practical projects, mentor
              guidance, and focused course paths.
            </p>
            <p style={{ fontSize: "18px", width: "600px" }}>
              Our programs cover modern web development, backend frameworks,
              frontend design, data tools, and deployment basics so learners
              understand how complete applications are planned, built, and
              shipped.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-4 shadow-lg"
            style={{
              width: "100%",
              maxWidth: "700px",
            }}
          >
            <img
              src={aboutImg}
              alt=""
              className="w-100 h-100 object-fit-cover"
            />
          </div>
        </div>
      </section>
      <div className="container pb-5">
        <div className="row g-4">
          {features.map((feature) => (
            <div key={feature.title} className="col-lg-4">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
