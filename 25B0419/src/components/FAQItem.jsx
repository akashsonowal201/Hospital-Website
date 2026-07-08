import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../styles/Card.css";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">

      <div className="faq-question" onClick={() => setOpen(!open)}>
        <h3>{question}</h3>

        {open ? <FaMinus /> : <FaPlus />}
      </div>

      {open && <p>{answer}</p>}

    </div>
  );
}

export default FAQItem;