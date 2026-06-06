import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h4>Premium Documentation</h4>
        <h1>Capturing Life's Greatest Moments</h1>
        <div
          className="hero-actions"
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <Link to="/pricelist">
            <button className="btn-gold">Lihat Pricelist</button>
          </Link>
          {/* Tombol Hubungi Kami yang lebih bagus */}
          <button
            className="btn-outline-white"
            onClick={() => window.open("https://wa.me/62xxxxxxxx")}
          >
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
