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

  const supercarImages = [
    'https://cdn.ferrari.com/cms/network/media/img/resize/670e710357a595000f736188-ferrari-f80-lineup-desktop?height=750',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDUE_5G6HLUZAOWWB35JVmvLEZE_K3bSJ4FcuF5gSEUwVGo_JaicW57Fhi9fQ-ZjRHY0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RwIjhGwKiABgwJ6Ye7dsxEfChqUDPNaHKw&s',
  ];

  const luxuryCarImages = [
    'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg',
    'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
  ];

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
        <CarSlider title="Supercar Collection" images={supercarImages} />
        <CarSlider title="Luxurious Cars Collection" images={luxuryCarImages} />
      </section>
    </div>
  );
};

export default Home;
