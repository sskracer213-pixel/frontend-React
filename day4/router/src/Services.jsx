import React from "react";

export default function Services() {
  return (
    <div className="page services-page">
      <h1>Services Page</h1>
      <p>Discover our comprehensive suite of professional technology services and creative solutions.</p>
      <div className="card-grid">
        <div className="card">
          <h3>💻 Web Application Development</h3>
          <p>Custom, high-performance web applications engineered with React, Vite, and cutting-edge web tools.</p>
        </div>
        <div className="card">
          <h3>🎨 UI/UX Design</h3>
          <p>Crafting intuitive, accessible, and aesthetically pleasing interfaces with smooth user interactions.</p>
        </div>
        <div className="card">
          <h3>☁️ Cloud & API Integration</h3>
          <p>Building scalable backend APIs and seamlessly integrating cloud infrastructure for modern apps.</p>
        </div>
      </div>
    </div>
  );
}
