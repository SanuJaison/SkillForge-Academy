// import React from 'react'

import { Link } from "react-router-dom";
import {
  LuBadgeCheck,
  LuBriefcaseBusiness,
  LuChartNoAxesCombined,
  LuCodeXml,
  LuHeadphones,
  LuLaptop,
  LuUsersRound,
} from "react-icons/lu";
import CardSection from "../components/CardSection"
import Hero from "../components/Hero"

const stats = [
  { value: "6+", label: "Career tracks" },
  { value: "120+", label: "Practice tasks" },
  { value: "15+", label: "Portfolio projects" },
  { value: "1:1", label: "Mentor support" },
];

const learningHighlights = [
  {
    icon: <LuLaptop />,
    title: "Learn by building",
    description:
      "Every module includes practical work, from responsive pages to APIs, dashboards, and deployment-ready apps.",
  },
  {
    icon: <LuUsersRound />,
    title: "Guided every week",
    description:
      "Mentors help with doubts, code reviews, project structure, and the places where beginners usually get stuck.",
  },
  {
    icon: <LuBriefcaseBusiness />,
    title: "Career preparation",
    description:
      "Build a portfolio, improve your resume, practice interviews, and understand how developer teams actually work.",
  },
];

const projectSteps = [
  "HTML, CSS, JavaScript, and React foundations",
  "Backend APIs, databases, authentication, and deployment",
  "Capstone project with portfolio and interview preparation",
];

const Home = () => {
  return (
    <>
      <Hero/>
      <section className="home-stats-section">
        <div className="container">
          <div className="row g-3">
            {stats.map((item) => (
              <div key={item.label} className="col-6 col-lg-3">
                <div className="home-stat">
                  <p>{item.value}</p>
                  <span>{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CardSection/>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row align-items-end mb-4 gy-3">
            <div className="col-lg-8">
              <p className="text-danger mb-2" style={{ fontWeight: "800" }}>
                WHY SKILLFORGE
              </p>
              <h2
                className="mb-0"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 3.125rem)",
                  fontWeight: "800",
                  maxWidth: "820px",
                }}
              >
                A focused classroom experience for serious beginners.
              </h2>
            </div>
            <div className="col-lg-4">
              <p className="mb-0 home-section-copy">
                Move from fundamentals to real project confidence with clear
                weekly milestones, mentor feedback, and practical assignments.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {learningHighlights.map((item) => (
              <div key={item.title} className="col-12 col-md-4">
                <div className="home-highlight-card">
                  <div className="home-highlight-icon">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="home-project-band">
            <div className="row align-items-center gy-4">
              <div className="col-lg-6">
                <p className="text-danger mb-2" style={{ fontWeight: "800" }}>
                  PROJECT-FIRST SYLLABUS
                </p>
                <h2>
                  Build a portfolio that shows how you think, not just what you
                  watched.
                </h2>
                <p>
                  Courses are structured around visible outcomes: clean user
                  interfaces, working backends, database-backed features, and
                  deployed applications that can be discussed in interviews.
                </p>
                <Link to="/courses" className="btn btn-success px-4 py-3 fw-bold">
                  Explore Courses
                </Link>
              </div>

              <div className="col-lg-6">
                <div className="home-learning-path">
                  {projectSteps.map((step, index) => (
                    <div key={step} className="home-path-item">
                      <span>{index + 1}</span>
                      <p>{step}</p>
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
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <div className="home-support-card">
                <LuCodeXml />
                <h5>Code reviews</h5>
                <p>Get feedback on structure, readability, bugs, and better ways to build features.</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="home-support-card">
                <LuHeadphones />
                <h5>Doubt clearing</h5>
                <p>Regular support keeps learners moving when concepts or project errors slow them down.</p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="home-support-card">
                <LuBadgeCheck />
                <h5>Certificate ready</h5>
                <p>Complete the track with projects, assessments, and a stronger profile for job applications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="container">
          <div className="home-cta">
            <div>
              <div className="home-cta-icon">
                <LuChartNoAxesCombined />
              </div>
              <h2>Ready to choose your learning path?</h2>
              <p>
                Compare course tracks, durations, tools, and project outcomes
                before selecting the program that fits your goal.
              </p>
            </div>
            <div className="d-flex gap-3 flex-wrap">
              <Link to="/courses" className="btn btn-light px-4 py-3 fw-bold">
                View All Courses
              </Link>
              <Link to="/contact" className="btn btn-outline-light px-4 py-3 fw-bold">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
