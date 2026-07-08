import { useEffect, useState } from "react";

import DoctorCard from "../components/DoctorCard";
import { getDoctors } from "../services/api";

import doctor1 from "../images/doctor1.jpg";
import doctor2 from "../images/doctor2.jpg";
import doctor3 from "../images/doctor3.jpg";
import doctor4 from "../images/doctor4.jpg";
import doctor5 from "../images/doctor5.jpg";

import "../styles/Doctors.css";

function Doctors() {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  const doctorImages = {
    "Dr. Raj Sharma": doctor1,
    "Dr. Priya Singh": doctor2,
    "Dr. Aman Gupta": doctor3,
    "Dr. Neha Verma": doctor4,
    "Dr. Karan Mehta": doctor5,
  };

  useEffect(() => {
    async function loadDoctors() {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadDoctors();
  }, []);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.department_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="doctor-banner">
        <div className="container">
          <h1>Our Doctors</h1>

          <p>
            Meet our experienced specialists dedicated to providing exceptional
            healthcare.
          </p>
        </div>
      </section>

      <section className="doctor-page">
        <div className="container">
          <input
            type="text"
            placeholder="Search doctor or department..."
            className="doctor-search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="doctor-grid">
            {filteredDoctors.map((doctor) => (
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
    </>
  );
}

export default Doctors;