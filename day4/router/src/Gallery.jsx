import React from "react";

export default function Gallery() {
  return (
    <div className="page gallery-page">
      <h1>Gallery Page</h1>
      <p>Take a look at snapshots of our projects, team milestones, and creative design showcases.</p>
      <div className="card-grid gallery-grid">
        <div className="card gallery-item">
          <div className="gallery-placeholder">🎨 Creative Showcase</div>
          <h3>Modern UI Dashboard</h3>
          <p>An interactive dashboard featuring dark mode analytics and real-time data charts.</p>
        </div>
        <div className="card gallery-item">
          <div className="gallery-placeholder">🛒 E-Commerce App</div>
          <h3>Online Marketplace</h3>
          <p>A full-featured shopping portal with product filters, carts, and order checkout flows.</p>
        </div>
        <div className="card gallery-item">
          <div className="gallery-placeholder">📱 Mobile First Experience</div>
          <h3>Portfolio Platform</h3>
          <p>A sleek, minimal personal portfolio site showcasing developer projects and skills.</p>
        </div>
      </div>
    </div>
  );
}
