import React from "react";

const ServiceCard = ({ icon, title, desc }) => {
  return (
    <div className="service-card">
      <div className="icon-wrapper">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <style jsx>{`
        .service-card {
          background: #fff;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          text-align: center;
        }
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(212, 175, 55, 0.2);
        }
        .icon-wrapper {
          font-size: 3rem;
          color: var(--primary-gold);
          margin-bottom: 20px;
        }
        .service-card h3 {
          margin-bottom: 15px;
        }
        .service-card p {
          font-size: 0.9rem;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default ServiceCard;
