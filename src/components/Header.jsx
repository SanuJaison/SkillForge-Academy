import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

import { FaGraduationCap } from "react-icons/fa";

const Header = () => {
  const navClass = ({ isActive }) =>
    isActive
      ? "fw-bolder px-3 py-2 rounded bg-success-subtle text-black text-decoration-none"
      : "fw-bolder px-3 py-2 rounded text-dark text-decoration-none navitem";

  return (
    <Navbar
      bg="white"
      expand="lg"
      className="shadow-sm position-sticky top-0"
      style={{ zIndex: 1000 }}
    >
      <Container>
        <Navbar.Brand className="d-flex align-items-center gap-3 fw-bold fs-2">
          <div
            className="bg-success text-white d-flex justify-content-center align-items-center rounded"
            style={{
              width: "50px",
              height: "50px",
            }}
          >
            <FaGraduationCap size={25} />
          </div>

          <span className="fs-4 fw-bolder">
            SkillForge Academy
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0 me-lg-5">

            <NavLink
              to="/"
              end
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/courses"
              className={navClass}
            >
              Courses
            </NavLink>

            <NavLink
              to="/about"
              className={navClass}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={navClass}
            >
              Contact Us
            </NavLink>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;