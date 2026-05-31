import { Link, NavLink } from "react-router-dom";
import { FaGraduationCap } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      className="text-white py-5"
      style={{
        background: "linear-gradient(135deg, #081420, #0b1f35)",
      }}
    >
      <div className="container">
        <div className="row gy-5">

          <div className="col-12 col-md-6 col-lg-4">
            <Link to="/" className="text-decoration-none">
              <div className="d-flex align-items-center gap-3 mb-4 footerlogo">
                <div
                  className="bg-success d-flex justify-content-center align-items-center rounded"
                  style={{
                    width: "56px",
                    height: "56px",
                  }}
                >
                  <FaGraduationCap size={26} />
                </div>
  
                <h3 className="fw-bold mb-0">SkillForge Academy</h3>
              </div>
            </Link>

            <p
              style={{
                color: "#b8c5cf",
                lineHeight: "2rem",
                fontSize: "1.15rem",
              }}
            >
              Practical full-stack, frontend, analytics, and cloud
              courses for students who want structured technical
              learning with project experience.
            </p>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-2">
            <h4 className="fw-bold mb-4">Pages</h4>

            <div className="d-flex flex-column gap-3">
              <NavLink
                to="/"
                className="text-decoration-none" style={{color: "#b8c5cf",}}
              >
                Home
              </NavLink>

              <NavLink
                to="/courses"
                className="text-decoration-none" style={{color: "#b8c5cf",}}
              >
                Courses
              </NavLink>

              <NavLink
                to="/about"
                className="text-decoration-none" style={{color: "#b8c5cf",}}
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className="text-decoration-none" style={{color: "#b8c5cf",}}
              >
                Contact Us
              </NavLink>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h4 className="fw-bold mb-4">Courses</h4>

            <div className="d-flex flex-column gap-3" style={{color: "#b8c5cf",}}>
              <p className="mb-0">MERN Stack Development</p>
              <p className="mb-0">Python Full Stack</p>
              <p className="mb-0">Java Full Stack</p>
              <p className="mb-0">Frontend Developer</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h4 className="fw-bold mb-4">Contact</h4>

            <div className="d-flex flex-column gap-4" style={{color: "#b8c5cf",}}>
              <div className="d-flex align-items-center gap-3">
                <FiPhone className="text-warning fs-4" />
                <span>+91 98765 43210</span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <FiMail className="text-warning fs-4" />
                <span>skillforgeacademy@gmail.com</span>
              </div>

              <div className="d-flex align-items-center gap-3">
                <FiMapPin className="text-warning fs-4" />
                <span>Ernakulam, Kerala</span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex justify-content-between align-items-center mt-5 pt-4 flex-wrap gap-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <p className="mb-0" style={{color: "#b8c5cf",}}>
            © 2026 SkillForge Academy. All rights reserved.
          </p>

          <p className="mb-0" style={{color: "#b8c5cf",}}>
            Learn. Build. Launch.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;