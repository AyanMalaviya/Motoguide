import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiSearch } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-theme');
  };

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchActive(false);
      setSearchQuery('');
    }
  };

  const handleSearchToggle = () => setSearchActive((prev) => !prev);

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
          <Link to="/highpower" className={`nav-link ${isActive('/highpower')}`}>
            High Power
          </Link>
        </div>

        <div className="navbar-brand">
          <span className="brand-highlight">Moto</span>Guide
        </div>

        <div className="navbar-right navbar-links">
          <Link to="/highcomfort" className={`nav-link ${isActive('/highcomfort')}`}>
            High Comfort
          </Link>

          <form onSubmit={handleSearchSubmit} className={`search-form ${searchActive ? 'active' : ''}`}>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              autoFocus={searchActive}
            />
            <button
              type="button"
              className="search-icon"
              onClick={handleSearchToggle}
              title={searchActive ? "Close Search" : "Open Search"}
            >
              <FiSearch size={22} />
            </button>
          </form>

          <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
