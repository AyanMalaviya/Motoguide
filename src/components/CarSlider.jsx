// src/components/CarSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './CarSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarSlider = ({ title, images }) => {
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

  return (
    <div className="slider-container">
      <h2 className="slider-title">{title}</h2>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="slide">
            <img src={img} alt={`Car ${i + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
