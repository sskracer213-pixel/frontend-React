import React from "react";

export default function Courses() {
  return (
    <div className="page courses-page">
      <h1>Courses Page</h1>
      <p>Explore our carefully crafted curriculum designed to take you from fundamentals to advanced web development.</p>
      <div className="card-grid">
        <div className="card">
          <h3>⚛️ React & Single Page Apps</h3>
          <p>Master component state, props, lifecycle hooks, and React Router DOM for dynamic multi-page SPAs.</p>
        </div>
        <div className="card">
          <h3>🚀 Full Stack JavaScript</h3>
          <p>Learn Node.js, Express, MongoDB, and RESTful API architecture to build full-stack web solutions.</p>
        </div>
        <div className="card">
          <h3>🎨 Advanced CSS & Modern UI</h3>
          <p>Deep dive into modern CSS layouts, Flexbox, Grid, keyframe animations, and design systems.</p>
        </div>
      </div>
    </div>
  );
}
