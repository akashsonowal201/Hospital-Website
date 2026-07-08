import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserMd, FaHospital, FaHeartbeat, FaAward } from "react-icons/fa";

import Hero from "../components/Hero";
import DepartmentCard from "../components/DepartmentCard";
import DoctorCard from "../components/DoctorCard";
import TestimonialCard from "../components/TestimonialCard";
import FAQItem from "../components/FAQItem";

import { getDoctors, getDepartments } from "../services/api";

import doctor1 from "../images/doctor1.jpg";
import doctor2 from "../images/doctor2.jpg";
import doctor3 from "../images/doctor3.jpg";
import doctor4 from "../images/doctor4.jpg";
import doctor5 from "../images/doctor5.jpg";

import cardiology from "../images/cardiology.jpg";
import neurology from "../images/neurology.jpg";
import pediatrics from "../images/pediatrics.jpg";
import orthopedics from "../images/orthopedics.jpg";
import dermatology from "../images/dermatology.jpg";

import "../styles/Home.css";

function Home() {
  const [doctors, setDoctors] = useState([]);
  const [departments, setDepartments] = useState([]);

  const doctorImages = {
    "Dr. Raj Sharma": doctor1,
    "Dr. Priya Singh": doctor2,
    "Dr. Aman Gupta": doctor3,
    "Dr. Neha Verma": doctor4,
    "Dr. Karan Mehta": doctor5,
  };

  const departmentImages = {
    Cardiology: cardiology,
    Neurology: neurology,
    Pediatrics: pediatrics,
    Orthopedics: orthopedics,
    Dermatology: dermatology,
  };

  useEffect(() => {
    async function loadData() {
      try {
        const doctorData = await getDoctors();
        const departmentData = await getDepartments();

        setDoctors(doctorData);
        setDepartments(departmentData);
      } catch (error) {
        console.log(error);
      }
    }

    loadData();
  }, []);

  return (
    <>
      <Hero />

      <section className="stats">
        <div className="container stats-container">
          <div className="stat-card">
            <FaUserMd />
            <h2>75+</h2>
            <p>Specialist Doctors</p>
          </div>

          <div className="stat-card">
            <FaHospital />
            <h2>20+</h2>
            <p>Departments</p>
          </div>

          <div className="stat-card">
            <FaHeartbeat />
            <h2>50K+</h2>
            <p>Happy Patients</p>
          </div>

          <div className="stat-card">
            <FaAward />
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose LifeCare Hospital</h2>

            <p>
              We provide compassionate healthcare with experienced doctors,
              advanced technology and patient-first care.
            </p>
          </div>

          <div className="why-grid">
            <div className="why-card">
              <FaUserMd />
              <h3>Expert Doctors</h3>

              <p>
                Highly experienced specialists dedicated to providing quality
                healthcare.
              </p>
            </div>

            <div className="why-card">
              <FaHeartbeat />
              <h3>24/7 Emergency</h3>

              <p>
                Immediate emergency care with modern ambulances and trained
                professionals.
              </p>
            </div>

            <div className="why-card">
              <FaHospital />
              <h3>Advanced Equipment</h3>

              <p>
                Equipped with modern diagnostic and treatment facilities for
                accurate care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="departments-preview">
        <div className="container">
          <div className="section-title">
            <h2>Our Departments</h2>

            <p>
              Comprehensive healthcare services delivered by experienced
              specialists.
            </p>
          </div>

          <div className="department-grid">
            {departments.slice(0, 3).map((department) => (
              <DepartmentCard
                key={department.id}
                image={departmentImages[department.name]}
                title={department.name}
                description={department.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="doctors-preview">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Specialists</h2>

            <p>
              Experienced doctors committed to providing exceptional healthcare.
            </p>
          </div>

          <div className="doctor-grid">
            {doctors.slice(0, 3).map((doctor) => (
              <DoctorCard
                key={doctor.id}
                image={doctorImages[doctor.name]}
                name={doctor.name}
                qualification={doctor.qualification}
                department={doctor.department_name}
                experience={doctor.experience}
                available={doctor.available}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>What Our Patients Say</h2>

            <p>Trusted by thousands of patients for quality healthcare.</p>
          </div>

          <div className="testimonial-grid">
            <TestimonialCard
              name="Rahul Sharma"
              review="Excellent doctors and caring staff. My treatment experience was outstanding."
            />

            <TestimonialCard
              name="Priya Das"
              review="Modern facilities with quick service. Highly recommended hospital."
            />

            <TestimonialCard
              name="Amit Verma"
              review="Professional doctors explained everything clearly and made me comfortable."
            />
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>

          <FAQItem
            question="Do I need an appointment before visiting?"
            answer="Appointments are recommended, but emergency patients are always treated immediately."
          />

          <FAQItem
            question="Is emergency service available 24/7?"
            answer="Yes, our emergency department operates twenty-four hours every day."
          />

          <FAQItem
            question="Do you accept health insurance?"
            answer="Yes, we accept most major health insurance providers."
          />
        </div>
      </section>

      <section className="cta">
        <div className="container cta-container">
          <div>
            <h2>Need Medical Assistance?</h2>

            <p>Book your appointment with our specialists today.</p>
          </div>

          <Link to="/appointment" className="cta-btn">
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;