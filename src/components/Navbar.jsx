import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Mencegah scroll saat menu terbuka
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${isOpen ? "menu-active" : ""}`}
    >
      <div className="container nav-content">
        <Link to="/" className="nav-logo-link" onClick={closeMenu}>
          <img src="/img/logo.png" alt="Logo" className="nav-logo" />
        </Link>

        {/* Ikon Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </div>

        {/* Overlay Menu Mobile */}
        <ul className={`nav-links ${isOpen ? "show" : ""}`}>
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
          <li className="mobile-only">
            <button className="btn-gold" onClick={closeMenu}>
              HUBUNGI SAYA
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
