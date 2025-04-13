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
            <h1 className="hero-title">Professional Car</h1>
            <h2 className="hero-subtitle">Service and Repair</h2>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus eu orci ut imperdiet. Suspendisse convallis dui diam.
            </p>
            <p className="hero-phone">Phone: 123 456 786</p>
            <button className="hero-button" onClick={handleContactClick}>Contact Us</button>
          </div>
        </div>
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1658058765852-2e494c9ceace?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGNhciUyMGRldGFpbGluZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Car Detailing"
        />
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-card">
          <div className="about-images-grid">
            <div className="about-image-card" data-transition>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868728_1280.jpg"
                alt="Detailing Work 1"
              />
            </div>
            <div className="about-image-card" data-transition>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb_hdfHlw2y_HLkhQTUYEGIfz2OGB-TipGqA&s"
                alt="Detailing Work 2"
              />
            </div>
            <div className="about-image-card" data-transition>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/29/09/32/auto-1868727_1280.jpg"
                alt="Detailing Work 3"
              />
            </div>
          </div>
          <div className="about-content">
            <h2 className="about-title">Know More About Us</h2>
            <p className="about-text">
              At MotoGuide, we specialize in providing top-notch auto detailing services. Our team of experts ensures that every vehicle receives the care and attention it deserves.
            </p>
            <p className="about-text">
              From exterior polishing to interior cleaning, we use the latest techniques and products to deliver exceptional results. Experience the best in auto detailing with MotoGuide.
            </p>
            <button className="about-btn" onClick={() => navigate('/')}>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;