import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <img src={car.image} alt={car.name} className="card-img-top" />
        <div className="card-body">
          <p className="card-text text-center">{car.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
