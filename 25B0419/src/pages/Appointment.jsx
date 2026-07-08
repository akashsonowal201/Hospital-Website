import { useEffect, useState } from "react";
import { createAppointment, getDoctors } from "../services/api";
import "../styles/Appointment.css";

function Appointment() {
  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    patient_name: "",
    age: "",
    gender: "Male",
    phone: "",
    doctor: "",
    appointment_date: "",
    appointment_time: "",
  });

  const [message, setMessage] = useState("");

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

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createAppointment(formData);

      setMessage("Appointment booked successfully.");

      setFormData({
        patient_name: "",
        age: "",
        gender: "Male",
        phone: "",
        doctor: "",
        appointment_date: "",
        appointment_time: "",
      });
    } catch (error) {
      setMessage("Unable to book appointment.");
      console.log(error);
    }
  }

  return (
    <>
      <section className="appointment-banner">
        <div className="container">
          <h1>Book Appointment</h1>

          <p>
            Schedule your consultation with our experienced specialists.
          </p>
        </div>
      </section>

      <section className="appointment-page">
        <div className="container">

          <form className="appointment-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="patient_name"
              placeholder="Patient Name"
              value={formData.patient_name}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select Doctor</option>

              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.id}>
                  {doctor.name} ({doctor.department_name})
                </option>
              ))}
            </select>

            <input
              type="date"
              name="appointment_date"
              value={formData.appointment_date}
              onChange={handleChange}
              required
            />

            <input
              type="time"
              name="appointment_time"
              value={formData.appointment_time}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Book Appointment
            </button>

            {message && (
              <p className="success-message">
                {message}
              </p>
            )}

          </form>

        </div>
      </section>
    </>
  );
}

export default Appointment;