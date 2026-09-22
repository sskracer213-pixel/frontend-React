import React from "react";

export default function Home() {
  return (
    <div className="page home-page">
      <h1>Home Page</h1>
      <p>Welcome to our website! Navigate through the pages using the navbar above to explore our services, courses, gallery, and more.</p>
      <div className="card-grid">
        <div className="card">
          <h3>⚡ Fast Navigation</h3>
          <p>Instant client-side routing powered by React Router DOM without page reloads.</p>
        </div>
        <div className="card">
          <h3>🎯 Modern Architecture</h3>
          <p>Modular component-driven design built with modern React standards.</p>
        </div>
        <div className="card">
          <h3>📱 Responsive Experience</h3>
          <p>Tailored layouts designed for great viewing on any screen size.</p>
        </div>
      </div>
    </div>
  );
}
