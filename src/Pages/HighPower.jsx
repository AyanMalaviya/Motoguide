import React from 'react';
import CarGallery from '../components/CarGallery';
import { highPowerCars } from '../data/carData';

const HighPower = () => {
  return <CarGallery carData={highPowerCars} title="High Power Racers" />;
};

export default HighPower;