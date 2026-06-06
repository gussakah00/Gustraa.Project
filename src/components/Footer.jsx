import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaTiktok, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Brand & Logo */}
        <div className="footer-brand">
          <img
            src="/img/logo.png"
            alt="Gusstraa Project"
            className="footer-logo"
          />
          <div className="socials">
            <a href="https://wa.me/yournumber">
              <FaWhatsapp />
            </a>
            <a href="https://instagram.com/gusstraa.project">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricelist">Pricelist</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Bali, Indonesia</p>
          <p>gusstraa.project@gmail.com</p>
          <p>+62 8xx-xxxx-xxxx</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Gusstraa.Project. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
