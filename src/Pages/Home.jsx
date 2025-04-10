import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  useEffect(() => {
    const btn = document.querySelector('.home-btn');
    if (isBtnHovered) {
      btn.classList.add('turbo-active');
    } else {
      btn.classList.remove('turbo-active');
    }
  }, [isBtnHovered]);

  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">
          Welcome to <span className="highlight">MotoGuide</span>
        </h1>
        <p className="home-subtitle">
          Discover the fastest and most luxurious cars on the planet.
        </p>
        <Link
          to="/featured"
          className="home-btn"
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default Home;