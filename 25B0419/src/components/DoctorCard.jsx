import { Link } from "react-router-dom";
import "../styles/Card.css";

function DoctorCard({
  image,
  name,
  qualification,
  department,
  experience,
  available,
}) {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} />

      <div className="doctor-content">
        <h3>{name}</h3>

        <p>{qualification}</p>

        <span>{department}</span>

        <small>{experience} Years Experience</small>

        <div className={available ? "available" : "unavailable"}>
          {available ? "Available" : "Unavailable"}
        </div>

        <Link to="/appointment" className="card-btn">
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;