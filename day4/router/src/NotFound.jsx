import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page not-found-page">
      <div className="badge-error">Error 404</div>
      <h1>404 Page Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className="btn-home">Back to Home</Link>
    </div>
  );
}
