import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Verdant Vistas</h1>
        <p>
          Welcome to Verdant Vistas, your one-stop shop for the finest,
          hand-selected houseplants. We believe that a touch of green can
          transform any space, bringing life, peace, and beauty into your home.
        </p>
        <Link to="/products" className="cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
