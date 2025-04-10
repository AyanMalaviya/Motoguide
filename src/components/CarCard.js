import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <div className="car-card-img-wrapper">
        <img src={car.image} alt={car.name} className="car-card-img" />
      </div>
      <div className="car-card-body">
        <h3 className="car-card-title">{car.name}</h3>
        <p className="car-card-price">{car.price}</p>
        <a href={car.link} target="_blank" rel="noopener noreferrer" className="car-card-btn">
          Official Page
        </a>
      </div>
    </div>
  );
};

export default CarCard;