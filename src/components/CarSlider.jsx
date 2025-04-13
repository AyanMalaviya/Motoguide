// src/components/CarSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import './CarSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarSlider = ({ title, images }) => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: { arrows: false },
      },
    ],
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
    <div className="slider-container">
      <h2 className="slider-title">{title}</h2>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="slide" onClick={() => handleImageClick(img)}>
            <img src={img} alt={`Car ${i + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
