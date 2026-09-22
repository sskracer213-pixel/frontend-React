import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">🌐</span>
          <span className="brand-text">ReactRouter Hub</span>
        </div>
        <nav className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Services
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Courses
          </NavLink>
          <NavLink to="/gallery" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Gallery
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Contact
          </NavLink>
          <NavLink to="/help" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            Help
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
