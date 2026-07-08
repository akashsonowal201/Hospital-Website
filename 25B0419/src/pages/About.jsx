import {
  FaHospital,
  FaUserMd,
  FaHeartbeat,
  FaAward,
} from "react-icons/fa";

import aboutImage from "../images/about.jpg";

import "../styles/About.css";

function About() {
  return (
    <>
      <section className="about-banner">
        <div className="container">
          <h1>About LifeCare Hospital</h1>

          <p>
            Trusted healthcare with experienced doctors, advanced technology and
            compassionate patient care.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-container">

          <div className="about-image">
            <img src={aboutImage} alt="Hospital" />
          </div>

          <div className="about-content">

            <h2>Your Health Is Our Priority</h2>

            <p>
              LifeCare Hospital is dedicated to delivering quality healthcare
              with compassion and excellence. Our experienced specialists,
              modern medical equipment and patient-centered approach ensure the
              highest standards of treatment.
            </p>

            <p>
              From preventive care to complex surgeries, we provide complete
              healthcare services across multiple specialties while maintaining
              safety, trust and comfort for every patient.
            </p>

          </div>

        </div>
      </section>

      <section className="mission-section">

        <div className="container">

          <div className="section-title">
            <h2>Our Mission & Vision</h2>

            <p>
              Committed to improving lives through exceptional healthcare.
            </p>
          </div>

          <div className="mission-grid">

            <div className="mission-card">
              <FaHeartbeat />

              <h3>Our Mission</h3>

              <p>
                To provide accessible, affordable and high-quality healthcare
                services while treating every patient with dignity, compassion
                and respect.
              </p>

            </div>

            <div className="mission-card">
              <FaHospital />

              <h3>Our Vision</h3>

              <p>
                To become one of the most trusted hospitals through innovation,
                excellence in patient care and continuous medical advancement.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="about-stats">

        <div className="container about-stats-grid">

          <div className="about-stat">
            <FaUserMd />
            <h2>75+</h2>
            <p>Experienced Doctors</p>
          </div>

          <div className="about-stat">
            <FaHospital />
            <h2>20+</h2>
            <p>Departments</p>
          </div>

          <div className="about-stat">
            <FaHeartbeat />
            <h2>50000+</h2>
            <p>Patients Treated</p>
          </div>

          <div className="about-stat">
            <FaAward />
            <h2>15+</h2>
            <p>Years of Excellence</p>
          </div>

        </div>

      </section>
    </>
  );
}

export default About;