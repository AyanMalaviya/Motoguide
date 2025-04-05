import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card">
        <img src={car.image} alt={car.name} className="card-img-top" />
        <div className="card-body">
          <p className="card-footer text-center">{car.name}</p>
          <p className="card-price text-center">{car.price}</p>
          <a href={car.link}><button>Link TO Official Page</button></a>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
