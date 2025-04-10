import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('light-theme');
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className={`navbar ${darkMode ? '' : 'light'}`}>
      <div className="navbar-container">
        <h2 className="navbar-logo">MotoGuide</h2>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/featured" className={isActive('/featured')} onClick={closeMenu}>Featured</Link></li>
          <li><Link to="/highpower" className={isActive('/highpower')} onClick={closeMenu}>High Power</Link></li>
          <li><Link to="/highcomfort" className={isActive('/highcomfort')} onClick={closeMenu}>High Comfort</Link></li>
          <li><Link to="/contactUs" className={isActive('/contactUs')} onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
