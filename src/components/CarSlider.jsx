// src/components/CarSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './CarSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarSlider = ({ title, images, isTrending = false }) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: isTrending ? 3 : 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: isTrending,
    centerPadding: '60px',
    cssEase: 'cubic-bezier(0.87, 0.03, 0.41, 0.9)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: isTrending ? 2 : 1,
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false
        }
      }
    ]
  };

  const handleImageClick = (img) => {
    const carData = {
      name: img.name || "Supercar",
      image: img,
      price: img.price || "Price on Request",
      description: "Experience the thrill of this exceptional automobile, combining cutting-edge technology with remarkable performance.",
      specifications: {
        engine: "V8 Twin-Turbo",
        power: "600+ HP",
        transmission: "8-Speed Auto",
        fuelType: "Petrol",
        mileage: "8-10 kmpl"
      }
    };

    navigate(`/car/${encodeURIComponent(carData.name.toLowerCase().replace(/\s+/g, '-'))}`, {
      state: { car: carData }
    });
  };

  return (
    <div className={`slider-container ${isTrending ? 'trending-slider' : ''}`}>
      <h2 className="slider-title">{title}</h2>
      <Slider {...settings}>
        {images.slice(0, isTrending ? 6 : images.length).map((img, i) => (
          <div key={i} className="slide" onClick={() => handleImageClick(img)}>
            <img src={img} alt={`Car ${i + 1}`} className="slide-image" />
            {isTrending && (
              <div className="trending-badge">
                <span>#{i + 1} Trending</span>
              </div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
