// import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import ContactCard from "../components/ContactCard";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GoClock } from "react-icons/go";
import { SlCalender } from "react-icons/sl";

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
  return (
    <>
      <section className="p-5 bg-light">
        <div className="container mt-5">
          <p
            className="mb-2"
            style={{ fontWeight: "800", color: "#5d6875", fontSize: "20px" }}
          >
            CONTACT US
          </p>
          <h1
            style={{
              fontSize: "70px",
              fontWeight: "800",
              width: "650px",
            }}
          >
            Talk to our course advisor
          </h1>
          <p style={{ fontSize: "22px", color: "#5d6875" }}>
            Reach out for course details, batch timing, fees, or help choosing
            the right learning path.
          </p>
        </div>

        <div className="row g-4 p-5">
          {contactInfo.map((item) => (
            <div key={item.title} className="col-lg-4">
              <ContactCard contact={item} />
            </div>
          ))}
        </div>

        <div className="p-5">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="border rounded-3 p-5 bg-white">
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
                        <option>MERN Stack</option>
                        <option>Python Full Stack</option>
                        <option>Java Full Stack</option>
                        <option>Data Science</option>
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

            <div className="col-lg-5">
              <div
                className="rounded-3 p-5 text-white h-100"
                style={{
                  background: "linear-gradient(135deg, #0f172a, #111827)",
                }}
              >
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
    </>
  );
};

export default Contact;
