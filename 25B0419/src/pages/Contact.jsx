import { useState } from "react";
import { createContact } from "../services/api";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createContact(formData);

      setSuccess("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setSuccess("Unable to send your message.");
    }
  }

  return (
    <>
      <section className="contact-banner">
        <div className="container">
          <h1>Contact Us</h1>

          <p>
            We'd love to hear from you. Feel free to contact our hospital.
          </p>
        </div>
      </section>

      <section className="contact-page">
        <div className="container contact-container">

          <div className="contact-info">

            <h2>Hospital Information</h2>

            <div className="info-box">
              <h3>Address</h3>
              <p>123 Healthcare Street, Mumbai, India</p>
            </div>

            <div className="info-box">
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>

            <div className="info-box">
              <h3>Email</h3>
              <p>info@lifecarehospital.com</p>
            </div>

            <div className="info-box">
              <h3>Working Hours</h3>
              <p>Monday - Sunday</p>
              <p>24 Hours Emergency Service</p>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

            {success && (
              <p className="contact-success">
                {success}
              </p>
            )}

          </form>

        </div>
      </section>
    </>
  );
}

export default Contact;