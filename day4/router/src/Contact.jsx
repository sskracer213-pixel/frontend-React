import React from "react";

export default function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact Page</h1>
      <p>Have a question or want to work together? Reach out to us through any of the channels below.</p>
      <div className="card-grid">
        <div className="card">
          <h3>📧 Email Support</h3>
          <p>Send your queries to <strong>contact@example.com</strong>. We typically respond within 24 hours.</p>
        </div>
        <div className="card">
          <h3>📞 Telephone</h3>
          <p>Give our team a call at <strong>+1 (555) 019-2834</strong>, Monday through Friday, 9am - 6pm.</p>
        </div>
        <div className="card">
          <h3>📍 Office Location</h3>
          <p>Visit us at <strong>100 Innovation Boulevard, Tech City, CA 94016</strong>.</p>
        </div>
      </div>
    </div>
  );
}
