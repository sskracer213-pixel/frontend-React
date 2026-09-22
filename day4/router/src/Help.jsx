import React from "react";

export default function Help() {
  return (
    <div className="page help-page">
      <h1>Help Page</h1>
      <p>Find quick answers, troubleshooting steps, and helpful resources to guide your experience.</p>
      <div className="card-grid">
        <div className="card">
          <h3>🧭 How do I navigate?</h3>
          <p>Click on any of the links in the top navigation bar to instantaneously transition between pages without refreshing.</p>
        </div>
        <div className="card">
          <h3>🔗 How do active routes work?</h3>
          <p>React Router DOM's NavLink dynamically applies the active class to highlight the link corresponding to your current URL.</p>
        </div>
        <div className="card">
          <h3>❓ What happens if a page isn't found?</h3>
          <p>Any undefined path automatically falls back to our custom 404 Not Found component via wildcard routing (*).</p>
        </div>
      </div>
    </div>
  );
}
