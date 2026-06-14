import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Menggunakan ikon yang lebih stylish

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isOpen ? "active" : ""}`}
    >
      <div className="container nav-content">
        <Link to="/" className="nav-logo-link" onClick={closeMenu}>
          <img src="/img/logo.png" alt="Logo" className="nav-logo" />
        </Link>

        {/* HAMBURGER ICON */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* NAV LINKS */}
        <ul className={`nav-links ${isOpen ? "show-menu" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/pricelist" onClick={closeMenu}>
              Pricelist
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="mobile-cta">
            <button className="btn-gold-nav">HUBUNGI SAYA</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
