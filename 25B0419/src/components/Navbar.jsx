import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../images/logo-image.jpg";

import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="LifeCare Hospital" className="logo-image" />

          <div className="logo-text">
            <h2>LifeCare</h2>
            <span>Hospital</span>
          </div>
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/departments" onClick={closeMenu}>
              Departments
            </NavLink>
          </li>

          <li>
            <NavLink to="/doctors" onClick={closeMenu}>
              Doctors
            </NavLink>
          </li>

          <li>
            <NavLink to="/appointment" onClick={closeMenu}>
              Appointment
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
