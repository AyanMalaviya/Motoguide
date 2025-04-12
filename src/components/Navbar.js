import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiSearch } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-theme');
  };

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-left navbar-links">
          <Link to="/" className={`nav-link ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/featured" className={`nav-link ${isActive('/featured')}`}>
            Featured
          </Link>
        </div>
        <div className="navbar-brand">
          <span className="brand-highlight">Moto</span>Guide
        </div>
        <div className="navbar-right navbar-links">
          <Link to="/highpower" className={`nav-link ${isActive('/highpower')}`}>
            High Power
          </Link>
          <Link to="/highcomfort" className={`nav-link ${isActive('/highcomfort')}`}>
            High Comfort
          </Link>
          <Link to="/contactUs" className={`nav-link ${isActive('/contactUs')}`}>
            Contact
          </Link>
          <button className="search-bar">
            <FiSearch size={22} />
          </button>
          <div className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;