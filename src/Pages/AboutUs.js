import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate(); // Add this hook
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Update theme based on body class
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    setTheme(currentTheme);

    // Observe changes to the body class for theme updates
    const observer = new MutationObserver(() => {
      const updatedTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
      setTheme(updatedTheme);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  const handleContactClick = () => {
    navigate('/contact'); // Add this function
  };

  return (
    <div className={`about-us-container ${theme}`}>
      <div className="about-us-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Expert Car Guide</h1>
            <h2 className="hero-subtitle">Consultation & Advice</h2>
            <p className="hero-description">
              Get personalized guidance for choosing, maintaining, and upgrading your car. Our experts help you make informed decisions for a better driving experience.
            </p>
            <p className="hero-phone">Phone: 123 456 786</p>
            <button className="hero-button" onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>
        <img
          className="hero-image"
          src="https://images.hdqwalls.com/download/mercedes-benz-amg-gt-4k-2020-qd-1600x900.jpg"
          alt="Car Consultation"
        />
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-card">
          <div className="about-images-grid">
            <div className="about-image-card" data-transition>
              <img
                src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80"
                alt="Car Consultation 1"
              />
            </div>
            <div className="about-image-card" data-transition>
              <img
                src="https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=600&q=80"
                alt="Car Consultation 2"
              />
            </div>
            <div className="about-image-card" data-transition>
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
                alt="Car Consultation 3"
              />
            </div>
          </div>
          <div className="about-content">
            <h2 className="about-title">Know More About Us</h2>
            <p className="about-text">
              At MotoGuide, we specialize in providing expert car guide consultation. Our team helps you navigate the world of automobiles, whether you're buying, upgrading, or simply seeking advice.
            </p>
            <p className="about-text">
              From comparing models to understanding features and maintenance tips, we offer unbiased, up-to-date information so you can make the best choices for your needs.
            </p>
            <button className="about-btn" onClick={() => navigate('/')}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;