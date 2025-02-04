import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to SixM Hardware</h1>
          <p>Your one-stop shop for quality hardware and timber products.</p>
          <Link to="/products" className="button">
            Explore Products
          </Link>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
