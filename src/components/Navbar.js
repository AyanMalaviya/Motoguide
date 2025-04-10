import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">MotoGuide</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/featured" className="nav-link">Featured</Link>
          <Link to="/highpower" className="nav-link">High Power</Link>
          <Link to="/highcomfort" className="nav-link">High Comfort</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;