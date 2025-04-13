import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiSearch, FiMenu } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <nav className={`navbar ${darkMode ? 'dark' : 'light'}`}>
        <div className="navbar-container">
          {/* Left side - only Home and Featured */}
          <div className="navbar-left navbar-links">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/featured" className={`nav-link ${isActive('/featured')}`}>
              Featured
            </Link>
          </div>

          {/* Centered brand */}
          <div className="navbar-brand">
            <span className="brand-highlight">Moto</span>Guide
          </div>

          {/* Right side - Contact Us, Search, Theme, Sidebar */}
          <div className="navbar-right navbar-links">
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              Contact Us
            </Link>

            <button
              type="button"
              className="search-icon"
              onClick={handleSearchToggle}
              title="Search"
            >
              <FiSearch size={22} />
            </button>

            {searchActive && (
              <form onSubmit={handleSearchSubmit} className="search-form active">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  autoFocus
                />
              </form>
            )}

            <div className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </div>

            <button
              className="sidebar-toggle"
              onClick={toggleSidebar}
              title="Toggle Sidebar"
            >
              <FiMenu size={22} />
            </button>
          </div>
        </div>
      </nav>

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
        <Link to="/contact" className="sidebar-link" onClick={toggleSidebar}>
          Contact Us
        </Link>
      </div>
    </>
  );
};

export default Navbar;