import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ name, role, quote }) => {
  return (
    <div className="testimonial-card">
      <FaQuoteLeft className="quote-icon" />
      <p className="quote-text">{quote}</p>
      <div className="user-info">
        <h4>{name}</h4>
        <span>{role}</span>
      </div>
      <style jsx>{`
        .testimonial-card {
          background: #fff;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          text-align: left;
        }
        .quote-icon {
          color: var(--primary-gold);
          font-size: 2rem;
          margin-bottom: 15px;
          opacity: 0.5;
        }
        .quote-text {
          font-style: italic;
          color: #444;
          margin-bottom: 20px;
        }
        .user-info h4 {
          margin: 0;
          color: var(--accent-dark);
        }
        .user-info span {
          font-size: 0.8rem;
          color: var(--primary-gold);
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default TestimonialCard;
