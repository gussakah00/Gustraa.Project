import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ubah state saat scroll lebih dari 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-content">
        <Link to="/" className="nav-logo-link">
          <img
            src="/img/logo.png"
            alt="Gusstraa Project"
            className="nav-logo"
          />
        </Link>

        {/* Ikon Hamburger (Hanya muncul di Mobile) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Nav Links tetap sejajar horizontal */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pricelist">Pricelist</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <button className="btn-gold-nav">HUBUNGI SAYA</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
