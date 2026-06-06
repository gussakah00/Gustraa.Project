import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PricelistCard = ({ title, price, features, isPopular }) => {
  return (
    <div className={`price-card ${isPopular ? "popular" : ""}`}>
      {isPopular && <div className="badge">Best Seller</div>}
      <h3>{title}</h3>
      <div className="price">
        <span className="currency">Rp</span>
        <span className="amount">{price}</span>
      </div>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>
            <FaCheckCircle className="icon" /> {feature}
          </li>
        ))}
      </ul>
      <button className="btn-gold">Pesan Sekarang</button>

      <style jsx>{`
        .price-card {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid #eee;
          position: relative;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .price-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        .price-card.popular {
          border: 2px solid var(--primary-gold);
          transform: scale(1.05);
        }
        .badge {
          position: absolute;
          top: -15px;
          background: var(--gold-gradient);
          color: #fff;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
        }
        .price {
          margin-bottom: 25px;
          color: var(--primary-gold);
        }
        .amount {
          font-size: 2.5rem;
          font-weight: 700;
        }
        .features-list {
          width: 100%;
          margin-bottom: 30px;
        }
        .features-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 0.9rem;
          color: #555;
        }
        .icon {
          color: var(--primary-gold);
        }
        .btn-gold {
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default PricelistCard;
