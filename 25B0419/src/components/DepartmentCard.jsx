import { Link } from "react-router-dom";
import "../styles/Card.css";

function DepartmentCard({ image, title, description }) {
  return (
    <div className="department-card">
      <img src={image} alt={title} />

      <div className="department-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <Link to="/appointment" className="card-btn">
          Book Appointment
        </Link>
      </div>
    </div>
  );
}

export default DepartmentCard;