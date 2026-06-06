import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
// Import Ikon
import {
  FaInstagram,
  FaQuoteLeft,
  FaCamera,
  FaVideo,
  FaAward,
} from "react-icons/fa";

const Home = () => {
  const testimonials = [
    {
      name: "Sinta & Wahyu",
      quote:
        "Hasil fotonya jernih banget dan timnya asik diajak diskusi. Recommended banget buat yang mau prewed!",
    },
    {
      name: "Andi (Corporate)",
      quote:
        "Sangat puas dengan dokumentasi event kantor kami. On time, profesional, dan hasilnya elegan.",
    },
    {
      name: "Budi & Sari",
      quote:
        "Terima kasih Gusstraa, momen pernikahan kami jadi makin berkesan dengan foto-foto yang estetik.",
    },
  ];

  return (
    <div className="home-page">
      <Hero />

      {/* About Section */}
      <section className="section-padding container">
        <div className="about-brief-grid">
          <div className="brief-content">
            <h4 className="gold-text">Tentang Kami</h4>
            <h2>Gusstraa.Project</h2>
            <p>
              Sejak 2019, <strong>Gusstraa.Project</strong> telah menciptakan
              kenangan abadi bagi ribuan klien. Kami fokus pada estetika dan
              fungsionalitas dalam menangkap setiap momen berharga Anda.
            </p>
            <Link to="/about">
              <button className="btn-gold-outline">
                Pelajari Selengkapnya
              </button>
            </Link>
          </div>
          <div className="stats-container">
            <div className="stat-card">
              <h3>10+</h3>
              <h5>fantastis team</h5>
            </div>
            <div className="stat-card">
              <h3>2+</h3>
              <h5>Years Exp</h5>
            </div>
            <div className="stat-card">
              <h3>99+</h3>
              <h5>Events</h5>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION PRICELIST PREVIEW */}
      <section className="home-pricelist section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: "50px" }}>
            <h4 className="gold-text">Our Best Offers</h4>
            {/* <h2 style={{ fontSize: "2.5rem", marginTop: "10px" }}>
              Pricelist Kami
            </h2> */}
          </div>

          <div className="pricelist-preview-grid">
            {/* Hanya 3 Item agar Layout Rapi */}
            {[
              {
                name: "WEDDING",
                price: "1.500K",
                desc: "Same Day Documentation",
              },
              {
                name: "PREWEDDING",
                price: "1.200K",
                desc: "Suite Package (1 Location)",
              },
              { name: "GRADUATION", price: "350K", desc: "Personal Package" },
            ].map((item, i) => (
              <div key={i} className="preview-card">
                <div className="card-badge">Most Popular</div>
                <h3>{item.name}</h3>
                <div className="price">{item.price}</div>
                <p>{item.desc}</p>
                <Link to="/pricelist">
                  <button className="btn-gold-small">CEK DETAIL</button>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: "50px" }}>
            <Link to="/pricelist" className="view-all-link">
              LIHAT SEMUA PAKET LAYANAN →
            </Link>
          </div>
        </div>
      </section>
      {/* SECTION TESTIMONIAL (DITAMBAHKAN KEMBALI) */}
      <section className="testimonial-section section-padding">
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: "50px" }}>
            Our Testimonials
          </h2>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="t-card">
                <FaQuoteLeft className="quote-icon" />
                <p>"{t.quote}"</p>
                <h4>- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION INSTAGRAM (AJAKAN KUNJUNGI) */}
      <section className="instagram-cta">
        <div className="container">
          <h2>Our Latest Work</h2>
          <a
            href="https://instagram.com/gusstraa.project"
            target="_blank"
            rel="noreferrer"
            className="insta-handle"
          >
            <FaInstagram /> @gusstraa.project
          </a>
          <button
            className="btn-gold"
            style={{ padding: "10px 20px", fontSize: "0.8rem" }}
            onClick={() =>
              window.open("https://instagram.com/gusstraa.project")
            }
          >
            KUNJUNGI INSTAGRAM
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
