import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="navbar">
      <h1>SixM Hardware</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </nav>
  );
};

export default Navbar;
