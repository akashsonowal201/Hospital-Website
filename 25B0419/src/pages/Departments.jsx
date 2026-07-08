import { useEffect, useState } from "react";
import DepartmentCard from "../components/DepartmentCard";
import { getDepartments } from "../services/api";
import cardiology from "../images/cardiology.jpg";
import neurology from "../images/neurology.jpg";
import pediatrics from "../images/pediatrics.jpg";
import orthopedics from "../images/orthopedics.jpg";
import dermatology from "../images/dermatology.jpg";
import "../styles/Departments.css";

function Departments() {
  const [departments, setDepartments] = useState([]);

  const departmentImages = {
    Cardiology: cardiology,
    Neurology: neurology,
    Pediatrics: pediatrics,
    Orthopedics: orthopedics,
    Dermatology: dermatology,
  };

  useEffect(() => {
    async function loadDepartments() {
      try {
        const data = await getDepartments();
        setDepartments(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadDepartments();
  }, []);

  return (
    <>
      <section className="department-banner">
        <div className="container">
          <h1>Our Medical Departments</h1>
          <p>
            Comprehensive healthcare services with experienced specialists and
            advanced medical technology.
          </p>
        </div>
      </section>

      <section className="department-page">
        <div className="container">
          <div className="department-grid">
            {departments.map((department) => (
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
    </>
  );
}

export default Departments;
