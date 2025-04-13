import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSun, FaMoon, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { CarContext } from '../context/CarContext';
import './Navbar.css';

const Navbar = ({ theme, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { allCars } = useContext(CarContext);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    const searchQuery = searchTerm.toLowerCase();
    const results = allCars.filter(car => {
      const carName = car.name.toLowerCase();
      const carBrand = car.name.split(' ')[0].toLowerCase();
      return carName.includes(searchQuery) || carBrand.includes(searchQuery);
    });

    if (results.length === 1) {
      navigate(`/car/${encodeURIComponent(results[0].name.toLowerCase().replace(/\s+/g, '-'))}`, {
        state: { car: results[0] }
      });
    } else if (results.length > 0) {
      navigate('/search', { state: { results } });
    } else {
      navigate('/search', { state: { results: [] } });
    }
    
    setSearchTerm('');
    setIsSearchActive(false); // Close search bar after submission
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <Link to="/" className={`navbar-brand ${theme}`}>
            <span>MOTO</span>
            <span className="brand-highlight">GUIDE</span>
          </Link>
        </div>

        <div className="navbar-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/featured" className="nav-link">Featured</Link>
          <Link to="/highpower" className="nav-link">High Power</Link>
          <Link to="/highcomfort" className="nav-link">High Comfort</Link>
          
          <form onSubmit={handleSearch} className={`search-form ${isSearchActive ? 'active' : ''}`}>
            <input
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button 
              type="button" 
              className="search-icon"
              onClick={() => setIsSearchActive(!isSearchActive)}
            >
              <FaSearch />
            </button>
          </form>

          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
          
          <button 
            className="sidebar-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''} ${theme}`}>
        <div className="sidebar-content">
          <Link to="/" className="sidebar-link" onClick={toggleSidebar}>Home</Link>
          <Link to="/featured" className="sidebar-link" onClick={toggleSidebar}>Featured</Link>
          <Link to="/highpower" className="sidebar-link" onClick={toggleSidebar}>High Power</Link>
          <Link to="/highcomfort" className="sidebar-link" onClick={toggleSidebar}>High Comfort</Link>
          <Link to="/contactUs" className="sidebar-link" onClick={toggleSidebar}>Contact</Link>
        </div>
      </div>

      {/* Overlay to close sidebar on click outside */}
      {isSidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar} />
      )}
    </nav>
  );
};

export default Navbar;