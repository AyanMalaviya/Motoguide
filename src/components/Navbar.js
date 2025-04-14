import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiSearch, FiMenu, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [carCategoriesOpen, setCarCategoriesOpen] = useState(false);
  const { currentLanguage, changeLanguage, languages, t } = useLanguage();
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
              {t('home')}
            </Link>
            <div className={`car-categories ${carCategoriesOpen ? 'active' : ''}`}>
              <button
                className="nav-link"
                onClick={() => setCarCategoriesOpen(!carCategoriesOpen)}
                onBlur={() => setTimeout(() => setCarCategoriesOpen(false), 200)}
              >
                {t('Car Categories')}
              </button>
              <div className="car-categories-menu">
                <Link
                  to="/featured"
                  className="car-categories-option"
                  onClick={() => setCarCategoriesOpen(false)}
                >
                  {t('Featured')}
                </Link>
                <Link
                  to="/highpower"
                  className="car-categories-option"
                  onClick={() => setCarCategoriesOpen(false)}
                >
                  {t('High Power')}
                </Link>
                <Link
                  to="/highcomfort"
                  className="car-categories-option"
                  onClick={() => setCarCategoriesOpen(false)}
                >
                  {t('High Comfort')}
                </Link>
              </div>
            </div>
          </div>

          {/* Centered brand */}
          <div className="navbar-brand">
            <span className="brand-highlight">Moto</span>Guide
          </div>

          {/* Right side - Contact Us, Search, Theme, Sidebar, Logo */}
          <div className="navbar-right navbar-links">
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              {t('aboutUs')}
            </Link>

            <button
              type="button"
              className="search-icon"
              onClick={handleSearchToggle}
              title={t('search')}
            >
              <FiSearch size={22} />
            </button>

            {searchActive && (
              <form onSubmit={handleSearchSubmit} className="search-form active">
                <input
                  type="text"
                  className="search-input"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={handleSearchChange}
                  autoFocus
                />
              </form>
            )}

            <div className="language-selector">
              <button
                className="language-toggle"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                title={t('changeLanguage')}
              >
                <FiGlobe size={22} />
                <span className="current-language">{currentLanguage.code.toUpperCase()}</span>
              </button>
              {languageMenuOpen && (
                <div className="language-menu">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      className={`language-option ${lang.code === currentLanguage.code ? 'active' : ''}`}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setLanguageMenuOpen(false);
                      }}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="theme-toggle" onClick={toggleTheme} title={t('toggleTheme')}>
              {darkMode ? <FiSun size={22} /> : <FiMoon size={22} />}
            </div>

            <button
              className="sidebar-toggle"
              onClick={toggleSidebar}
              title={t('toggleSidebar')}
            >
              <FiMenu size={22} />
            </button>

            {/* Logo */}
            <div className="navbar-logo">
              <img src="/Motoguide Logo.png" alt={t('logo')} className="logo-image" />
            </div>
          </div>
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <Link to="/" className="sidebar-link" onClick={toggleSidebar}>
          {t('home')}
        </Link>
        <Link to="/featured" className="sidebar-link" onClick={toggleSidebar}>
          {t('featured')}
        </Link>
        <Link to="/highpower" className="sidebar-link" onClick={toggleSidebar}>
          {t('highPower')}
        </Link>
        <Link to="/highcomfort" className="sidebar-link" onClick={toggleSidebar}>
          {t('highComfort')}
        </Link>
        <Link to="/contact" className="sidebar-link" onClick={toggleSidebar}>
          {t('contactUs')}
        </Link>
        <Link to="/about" className="sidebar-link" onClick={toggleSidebar}>
          {t('aboutUs')}
        </Link>
      </div>
    </>
  );
};

export default Navbar;
