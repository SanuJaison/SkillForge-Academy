// import React from 'react'
import { Link } from "react-router-dom";
import aboutImg from "../assets/about.avif";
import FeatureCard from "../components/FeatureCard";
import {
  LuBadgeCheck,
  LuBookOpenCheck,
  LuBrain,
  LuBriefcaseBusiness,
  LuClipboardCheck,
  LuCodeXml,
  LuTarget,
  LuUsersRound,
} from "react-icons/lu";

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

  const stats = [
    { value: "12", label: "Skill-based courses" },
    { value: "15+", label: "Portfolio projects" },
    { value: "120+", label: "Practice tasks" },
    { value: "6", label: "Career paths" },
  ];

  const methods = [
    {
      icon: <LuCodeXml />,
      title: "Project-led practice",
      description:
        "Students build interfaces, APIs, dashboards, data reports, and deployment-ready projects while learning the core concepts.",
    },
    {
      icon: <LuBrain />,
      title: "Concept clarity",
      description:
        "Lessons focus on why tools work, how pieces connect, and how to debug problems instead of memorizing steps.",
    },
    {
      icon: <LuClipboardCheck />,
      title: "Regular feedback",
      description:
        "Assignments, project reviews, and mentor notes help learners improve their code quality and confidence week by week.",
    },
  ];

  const values = [
    "Practical learning before theory overload",
    "Clear milestones for every course track",
    "Mentor support during difficult project stages",
    "Portfolio outcomes students can actually explain",
  ];

  const journey = [
    {
      title: "Start with foundations",
      description: "Learn the tools, syntax, workflows, and habits needed to work like a modern developer.",
    },
    {
      title: "Build guided projects",
      description: "Apply each concept in practical assignments, mini projects, and real feature-building exercises.",
    },
    {
      title: "Prepare for opportunities",
      description: "Polish portfolio work, revise common interview topics, and understand how to present your skills.",
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

      <section className="about-stats-section">
        <div className="container">
          <div className="row g-3">
            {stats.map((item) => (
              <div key={item.label} className="col-6 col-lg-3">
                <div className="about-stat">
                  <p>{item.value}</p>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
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

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-end mb-4 gy-3">
            <div className="col-lg-8">
              <p className="text-danger mb-2" style={{ fontWeight: "800" }}>
                HOW WE TEACH
              </p>
              <h2 className="about-section-title">
                A learning process built for confidence and consistency.
              </h2>
            </div>
            <div className="col-lg-4">
              <p className="about-section-copy">
                Each course combines guided lessons, practice tasks, project
                building, feedback, and career preparation into one clear path.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {methods.map((method) => (
              <div key={method.title} className="col-12 col-md-4">
                <div className="about-method-card">
                  <div className="about-method-icon">{method.icon}</div>
                  <h5>{method.title}</h5>
                  <p>{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="about-mission-band">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <p className="text-danger mb-2" style={{ fontWeight: "800" }}>
                  OUR MISSION
                </p>
                <h2>Help learners move from curiosity to career-ready skill.</h2>
                <p>
                  SkillForge Academy is focused on making technical education
                  practical, supportive, and outcome-driven. We want learners to
                  understand how real applications are planned, built, tested,
                  improved, and shipped.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="about-values-list">
                  {values.map((value) => (
                    <div key={value} className="about-value-item">
                      <LuBadgeCheck />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>
            <p className="text-danger mb-2" style={{ fontWeight: "800" }}>
              LEARNER JOURNEY
            </p>
            <h2 className="about-section-title">
              From first lesson to portfolio-ready projects.
            </h2>
          </div>

          <div className="row g-4">
            {journey.map((step, index) => (
              <div key={step.title} className="col-12 col-lg-4">
                <div className="about-journey-card">
                  <span>{index + 1}</span>
                  <h5>{step.title}</h5>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta">
            <div>
              <div className="about-cta-icon">
                <LuTarget />
              </div>
              <h2>Find the course path that fits your goal.</h2>
              <p>
                Explore the full catalog or talk to us if you need help choosing
                between development, analytics, cloud, testing, or design.
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/courses" className="btn btn-light px-4 py-3 fw-bold">
                View Courses
              </Link>
              <Link to="/contact" className="btn btn-outline-light px-4 py-3 fw-bold">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
