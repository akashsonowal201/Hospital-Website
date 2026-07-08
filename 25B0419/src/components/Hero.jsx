import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaUserMd,
  FaHeartbeat,
  FaHospital,
} from "react-icons/fa";

import heroImage from "../images/hero-doctor.jpg";

import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">
            Caring for Life, Every Step of the Way
          </span>

          <h1>
            Your Health Is Our <span>Highest Priority</span>
          </h1>

          <p>
            LifeCare Hospital provides advanced medical treatment with
            experienced specialists, modern technology, and compassionate care
            available 24 hours a day.
          </p>

          <div className="hero-buttons">
            <Link to="/appointment" className="primary-btn">
              Book Appointment
            </Link>

            <Link to="/doctors" className="secondary-btn">
              View Doctors
            </Link>
          </div>

          <div className="hero-features">
            <div>
              <FaUserMd />
              <span>Expert Doctors</span>
            </div>

            <div>
              <FaHeartbeat />
              <span>24/7 Emergency</span>
            </div>

            <div>
              <FaHospital />
              <span>Modern Equipment</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImage} alt="Doctor" />

          <div className="hero-card">
            <FaPhoneAlt />

            <div>
              <h4>Emergency</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;