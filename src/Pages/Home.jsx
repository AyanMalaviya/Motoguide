// src/Pages/Home.js
import React, { useRef, useState } from 'react';
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
    'https://www.automobilemag.com/uploads/sites/11/2020/11/Lamborghini-Aventador-SVJ.jpg',
    'https://www.mclarencf.com/imagetag/357/43/l/Used-2020-McLaren-720S-Spider-Performance.jpg',
  ];

  const luxuryCarImages = [
    'https://media.autoexpress.co.uk/image/private/s--dsad6H7D--/v1562247060/autoexpress/2018/11/2twin.jpg',
    'https://www.hdcarwallpapers.com/walls/2018_vision_mercedes_maybach_ultimate_luxury_interior_4k-HD.jpg',
    'https://i.pinimg.com/originals/5a/da/38/5ada3891fc99a64c73559438b107a63d.jpg',
  ];

  const carBrands = [
    { logo: 'https://www.carlogos.org/car-logos/ford-logo.png', name: 'Ford' },
    { logo: 'https://www.carlogos.org/car-logos/chevrolet-logo.png', name: 'Chevrolet' },
    { logo: 'https://www.carlogos.org/car-logos/audi-logo.png', name: 'Audi' },
    { logo: 'https://www.carlogos.org/car-logos/bmw-logo.png', name: 'BMW' },
    { logo: 'https://www.carlogos.org/car-logos/ferrari-logo.png', name: 'Ferrari' },
    { logo: 'https://www.carlogos.org/car-logos/lamborghini-logo.png', name: 'Lamborghini' },
    { logo: 'https://www.carlogos.org/car-logos/rolls-royce-logo.png', name: 'Rolls Royce' },
    { logo: 'https://www.carlogos.org/car-logos/mclaren-logo.png', name: 'McLaren' },
    { logo: 'https://www.carlogos.org/car-logos/jaguar-logo.png', name: 'Jaguar' },
    { logo: 'https://www.carlogos.org/car-logos/land-rover-logo.png', name: 'Land Rover' },
    { logo: 'https://www.carlogos.org/car-logos/maserati-logo.png', name: 'Maserati' },
    { logo: 'https://www.carlogos.org/car-logos/koenigsegg-logo.png', name: 'Koenigsegg' },
    { logo: 'https://www.carlogos.org/car-logos/porsche-logo.png', name: 'Porsche' },
    { logo: 'https://www.carlogos.org/car-logos/volkswagen-logo.png', name: 'Volkswagen' },
    { logo: 'https://www.carlogos.org/car-logos/mercedes-benz-logo.png', name: 'Mercedes-Benz' },
    { logo: 'https://www.carlogos.org/car-logos/nissan-logo.png', name: 'Nissan' },
    { logo: 'https://www.carlogos.org/car-logos/toyota-logo.png', name: 'Toyota' },
    { logo: 'https://www.carlogos.org/car-logos/lexus-logo.png', name: 'Lexus' },
    { logo: 'https://www.carlogos.org/car-logos/mg-logo.png', name: 'MG' }
  ];

  const [showAllBrands, setShowAllBrands] = useState(false);

  const handleViewAll = () => {
    setShowAllBrands(!showAllBrands);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">WELCOME TO MOTOGUIDE</h1>
        <p className="hero-subtitle">Where Luxury Meets Speed</p>
        <p className="hero-description">
          Experience the thrill of the world's most elite automotive machines, designed for performance and elegance.
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

      {/* Shopping by Car Section */}
      <section className="car-brands-section">
        <div className="section-header">
          <h2>Shopping by car?</h2>
          <p>Choose A Brand.</p>
          <button className="view-all" onClick={handleViewAll}>
            {showAllBrands ? 'Show Less' : 'View All'}
          </button>
        </div>
        <div className={`brands-grid ${showAllBrands ? 'show-all' : ''}`}>
          {carBrands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.logo} alt={brand.name} />
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
