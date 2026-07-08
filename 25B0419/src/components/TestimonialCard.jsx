import "../styles/Card.css";

function TestimonialCard({ name, review }) {
  return (
    <div className="testimonial-card">
      <h3>{name}</h3>
      <p>{review}</p>
      <span>★★★★★</span>
    </div>
  );
}

export default TestimonialCard;