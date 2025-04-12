import React from 'react';
import CarGallery from '../components/CarGallery';
import { highComfortCars } from '../data/carData';

const HighComfort = () => {
  return <CarGallery carData={highComfortCars} title="High Comfort" />;
};

export default HighComfort;