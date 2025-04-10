// src/components/CarSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './CarSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carImages = [
    'https://cdn.ferrari.com/cms/network/media/img/resize/670e710357a595000f736188-ferrari-f80-lineup-desktop?height=750',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvDUE_5G6HLUZAOWWB35JVmvLEZE_K3bSJ4FcuF5gSEUwVGo_JaicW57Fhi9fQ-ZjRHY0&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RwIjhGwKiABgwJ6Ye7dsxEfChqUDPNaHKw&s',
];

const CarSlider = () => {
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
      <h2 className="slider-title">Luxurious cars collections</h2>
      <Slider {...settings}>
        {carImages.map((img, i) => (
          <div key={i} className="slide">
            <img src={img} alt={`Car ${i + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
