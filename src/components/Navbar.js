import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiSearch, FiMenu } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-theme');
  };

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page (if implemented)
      console.log(`Searching for: ${searchQuery}`);
      setSearchActive(false);
      setSearchQuery('');
    }
  };

  const handleSearchToggle = () => setSearchActive((prev) => !prev);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-left">
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

        <div className="navbar-right">
          <Link to="/highcomfort" className={`nav-link ${isActive('/highcomfort')}`}>
            High Comfort
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about')}`}>
            About Us
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
            Contact Us
          </Link>

          {/* Search Form */}
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
              title={searchActive ? 'Close Search' : 'Open Search'}
            >
              <FiSearch size={22} />
            </button>
          </form>

          {/* Dark Mode Toggle */}
          <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
          </div>

          {/* Sidebar Toggle */}
          <button
            className="sidebar-toggle"
            onClick={toggleSidebar}
            title="Toggle Sidebar"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Link to="/" className="sidebar-link" onClick={toggleSidebar}>
          Home
        </Link>
        <Link to="/featured" className="sidebar-link" onClick={toggleSidebar}>
          Featured
        </Link>
        <Link to="/highpower" className="sidebar-link" onClick={toggleSidebar}>
          High Power
        </Link>
        <Link to="/highcomfort" className="sidebar-link" onClick={toggleSidebar}>
          High Comfort
        </Link>
        <Link to="/about" className="sidebar-link" onClick={toggleSidebar}>
          About Us
        </Link>
        <Link to="/contact" className="sidebar-link" onClick={toggleSidebar}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;