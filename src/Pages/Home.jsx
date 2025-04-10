// src/Pages/Home.js
import React, { useRef } from 'react';
import CarSlider from '../components/CarSlider';
import { Button } from '@mui/material';
import './home.css';

const Home = () => {
  const sliderRef = useRef(null);

  const handleExploreClick = () => {
    sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">

        
        <h1 className="hero-title">WELCOME TO MOTOGUIDE</h1>
        <p className="hero-subtitle">Where Luxury Meets Speed</p>
        <p className="hero-description">
          Experience the thrill of the world’s most elite automotive machines, designed for performance and elegance.
        </p>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handleExploreClick}
          className="explore-button"
        >
          EXPLORE COLLECTION
        </Button>
      </section>

      {/* CarSlider Section */}
      <section ref={sliderRef} className="slider-section">

        <CarSlider />
      </section>
    </div>
  );
};

export default Home;
