import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
          <h2>LifeCare Hospital</h2>

          <p>Providing quality healthcare with compassion and excellence.</p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/doctors">Doctors</Link>
        </div>

        <div>
          <h3>Contact</h3>

          <p>
            <FaPhoneAlt /> +91 98765 43210
          </p>

          <p>
            <FaEnvelope /> info@lifecarehospital.com
          </p>

          <p>
            <FaMapMarkerAlt /> Mumbai, India
          </p>
        </div>

        <div>
          <h3>Follow Us</h3>

          <div className="social">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2026 LifeCare Hospital. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
