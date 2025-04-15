// src/Pages/Home.js
import React, { useRef, useState } from 'react';
import CarSlider from '../components/CarSlider';
import { Button } from '@mui/material';
import './home.css';

const Home = () => {
  const sliderRef = useRef(null);
  const [showAllBrands, setShowAllBrands] = useState(false);

  const handleExploreClick = () => {
    sliderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewAll = () => {
    setShowAllBrands(!showAllBrands);
  };

  const supercarImages = [
    {
      name: "Ferrari F8 Tributo",
      image: 'https://th.bing.com/th/id/R.d548e74164c64b1dd8dc3219928983f8?rik=EFaymbFcpKPWSg&riu=http%3a%2f%2fwww.zacoe.com%2fimages%2fferrari_sf90%2f45%2ffront45_after.png&ehk=j6TeQ8r3JhKXQXSbG4M2lo4nXHtE%2bpDiAE%2fN50D1vcg%3d&risl=&pid=ImgRaw&r=0',
      price: "$1,200,000"
    },
    {
      name: "Lamborghini Aventador SVJ",
      image: 'https://th.bing.com/th/id/R.6ef3772c9166c46b182bb99d16f11677?rik=Z2H9x6wx%2bS5X1A&riu=http%3a%2f%2fhdqwalls.com%2fwallpapers%2flamborghini-aventador-svj-63-2018-front-k7.jpg&ehk=ccR%2f6if5%2fVyZXuoafnzIvAy5YT4srwq3HoaikhJluP8%3d&risl=&pid=ImgRaw&r=0',
      price: "$900,000"
    },
    {
      name: "McLaren 720S",
      image: 'https://wallpapercave.com/wp/wp2148417.jpg',
      price: "$850,000"
    }
  ];

  const luxuryCarImages = [
    {
      name: "Rolls-Royce Phantom",
      image: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/09/Rolls-Royce-Phantom-Series-II-Featured.jpg',
      price: "$600,000"
    },
    {
      name: "Mercedes-Maybach S-Class",
      image: 'https://www.hdcarwallpapers.com/walls/2018_vision_mercedes_maybach_ultimate_luxury_interior_4k-HD.jpg',
      price: "$450,000"
    },
    {
      name: "Bentley Continental GT",
      image: 'https://st.automobilemag.com/uploads/sites/5/2018/11/2019-Bentley-Continental-GT-Convertible-front-interior.jpg',
      price: "$350,000"
    }
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

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text-overlay">
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
          </div>
        </div>
      </section>
      {/* CarSlider Section */}
      <section ref={sliderRef} className="slider-section">
        <CarSlider 
          title="Supercar Collection" 
          images={supercarImages} 
          isLarge={true}
          settings={{
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)'
          }}
        />
        <CarSlider 
          title="Luxurious Cars Collection" 
          images={luxuryCarImages} 
          isLarge={true}
          settings={{
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 4000,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)'
          }}
        />
      </section>

      {/* Shopping by Car Section */}
      <section className="car-brands-section">
        <div className="section-header">
          <h2>Browse by brands?</h2>
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