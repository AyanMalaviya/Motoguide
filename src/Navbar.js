import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/">MotoGuide</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/featured">Featured</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/highpower">High Power</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/highcomfort">High Comfort</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

