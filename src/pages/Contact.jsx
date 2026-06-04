// import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import ContactCard from "../components/ContactCard";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import {
  LuBadgeIndianRupee,
  LuBookOpenCheck,
  LuCircleHelp,
  LuMessagesSquare,
} from "react-icons/lu";
import coursesData from "../data/coursesData";

const Contact = () => {
  const contactInfo = [
    {
      icon: <BsTelephone />,
      title: "Phone",
      value: "+91 98765 43210",
    },
    {
      icon: <FaRegEnvelope />,
      title: "Email",
      value: "skillforgeacademy@gmail.com",
    },
    {
      icon: <SlLocationPin />,
      title: "Location",
      value: "Ernakulam, Kerala, India",
    },
  ];

  const helpTopics = [
    {
      icon: <LuBookOpenCheck />,
      title: "Course guidance",
      description: "Compare tracks and choose the course that fits your current skill level and career goal.",
    },
    {
      icon: <LuBadgeIndianRupee />,
      title: "Fees and batches",
      description: "Get details about fees, upcoming batches, class timing, and available demo sessions.",
    },
    {
      icon: <LuMessagesSquare />,
      title: "Enrollment support",
      description: "Ask about the admission process, payment steps, prerequisites, and learning schedule.",
    },
  ];

  const faqs = [
    {
      question: "Can I ask for help choosing a course?",
      answer: "Yes. Share your current background and goal, and our advisor can suggest a suitable learning path.",
    },
    {
      question: "Do you provide demo sessions?",
      answer: "Demo sessions are available for selected batches depending on course timing and seat availability.",
    },
    {
      question: "How soon will I get a response?",
      answer: "Most enquiries are answered during admission support hours, Monday to Saturday from 10:00 AM to 7:00 PM.",
    },
    {
      question: "Can beginners join the courses?",
      answer: "Yes. Several courses are beginner friendly and start from the fundamentals before moving into projects.",
    },
    {
      question: "Will I build projects during the course?",
      answer: "Yes. Courses include practical assignments and portfolio-focused projects based on the selected track.",
    },
  ];

  return (
    <>
      <section className="contact-hero-section px-2 px-md-5 py-5 bg-light">
        <div className="container mt-5">
          <div className="row gy-4">
            <div className="col-lg-9">
              <p
                className="mb-2"
                style={{ fontWeight: "800", color: "#5d6875", fontSize: "20px" }}
              >
                CONTACT US
              </p>
              <h1
                style={{
                  fontSize: "clamp(2rem, 5vw, 4.375rem)",
                  fontWeight: "800",
                  maxWidth: "780px",
                  width: "100%",
                }}
              >
                Talk to our course advisor
              </h1>
              <p className="contact-hero-copy">
                Reach out for course details, batch timing, fees, demo sessions,
                or help choosing the right learning path.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row g-4 py-4 py-md-5">
            {contactInfo.map((item) => (
              <div key={item.title} className="col-12 col-md-4">
                <ContactCard contact={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>
            <p className="text-danger mb-2" style={{ fontWeight: 800 }}>
              HOW WE CAN HELP
            </p>
            <h2 className="contact-section-title">
              Ask the right questions before you join.
            </h2>
          </div>

          <div className="row g-4">
            {helpTopics.map((topic) => (
              <div key={topic.title} className="col-12 col-md-4">
                <div className="contact-help-card">
                  <div className="contact-help-icon">{topic.icon}</div>
                  <h5>{topic.title}</h5>
                  <p>{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-12 col-lg-7">
              <div className="contact-form-card">
                <p className="text-danger mb-2" style={{ fontWeight: 800 }}>
                  ENQUIRY FORM
                </p>

                <p
                  className="mb-5"
                  style={{ fontSize: "30px", fontWeight: 800 }}
                >
                  Send your course interest
                </p>

                <form>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <label
                        className="form-label"
                        style={{ fontSize: "18px", fontWeight: 800 }}
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="form-label"
                        style={{ fontSize: "18px", fontWeight: 800 }}
                      >
                        Phone number
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="form-label"
                        style={{ fontSize: "18px", fontWeight: 800 }}
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        className="form-label"
                        style={{ fontSize: "18px", fontWeight: 800 }}
                      >
                        Interested course
                      </label>

                      <select className="form-select form-select-lg">
                        <option>Select a course</option>
                        {coursesData.map((course) => (
                          <option key={course.id}>{course.title}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-12">
                      <label
                        className="form-label"
                        style={{ fontSize: "18px", fontWeight: 800 }}
                      >
                        Message
                      </label>

                      <textarea
                        rows="5"
                        className="form-control"
                        placeholder="Tell us what you want to learn"
                        style={{ fontSize: "18px" }}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-success p-3"
                        style={{ fontSize: "18px", fontWeight: 800 }}
                      >
                        <IoPaperPlaneOutline /> Submit Enquiry
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <div className="contact-support-panel">
                <p className="text-warning mb-2" style={{ fontWeight: 800 }}>
                  VISIT DETAILS
                </p>

                <h2
                  className="mb-5"
                  style={{ fontSize: "30px", fontWeight: 800 }}
                >
                  Admissions support hours
                </h2>

                <div className="border-top border-secondary pt-4">
                  <div className="d-flex gap-3 align-items-start">
                    <GoClock
                      size={30}
                      className="text-success mt-1 flex-shrink-0"
                    />

                    <div>
                      <p className="fs-5 mb-1" style={{ fontWeight: 800 }}>
                        Monday to Saturday
                      </p>

                      <p className="fs-6 text-light mb-0">
                        10:00 AM to 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-top border-secondary pt-4 mt-4">
                  <div className="d-flex gap-3 align-items-start">
                    <SlCalender
                      size={28}
                      className="text-success mt-1 flex-shrink-0"
                    />

                    <div>
                      <p className="fs-5 mb-1" style={{ fontWeight: 800 }}>
                        Demo sessions
                      </p>

                      <p className="fs-6 text-light mb-0">
                        Available for selected course batches
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-top border-secondary pt-4 mt-4">
                  <div className="d-flex gap-3 align-items-start">
                    <SlLocationPin
                      size={28}
                      className="text-success mt-1 flex-shrink-0"
                    />

                    <div>
                      <p className="fs-5 mb-1" style={{ fontWeight: 800 }}>
                        Training center
                      </p>

                      <p className="fs-6 text-light mb-0">
                        Ernakulam, Kerala, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="mb-4" style={{ maxWidth: "860px" }}>
              <p className="text-danger mb-2" style={{ fontWeight: 800 }}>
                QUICK ANSWERS
              </p>
              <h2 className="contact-section-title">
                Common questions before contacting us.
              </h2>
              <p className="contact-section-copy">
                These answers cover the most common admission doubts. For
                anything specific, send the enquiry form and we will guide you.
              </p>
          </div>

          <div className="contact-faq-list">
            {faqs.map((faq) => (
              <div key={faq.question} className="contact-faq-item">
                <LuCircleHelp />
                <div>
                  <h5>{faq.question}</h5>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
