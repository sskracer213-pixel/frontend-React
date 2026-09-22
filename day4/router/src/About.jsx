import React from "react";

export default function About() {
  return (
    <div className="page about-page">
      <h1>About Page</h1>
      <p>Learn more about our team, our mission, and the core values that guide our work every day.</p>
      <div className="card-grid">
        <div className="card">
          <h3>🌟 Our Mission</h3>
          <p>Delivering high-quality web applications and engaging digital experiences to empower learners and builders.</p>
        </div>
        <div className="card">
          <h3>💡 Innovation First</h3>
          <p>Constantly exploring modern web frameworks, component libraries, and UI design paradigms.</p>
        </div>
        <div className="card">
          <h3>🤝 Community Driven</h3>
          <p>Committed to knowledge sharing, open standards, and collaborative technology learning.</p>
        </div>
      </div>
    </div>
  );
}
