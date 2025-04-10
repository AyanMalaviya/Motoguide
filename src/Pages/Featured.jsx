import React from 'react';
import CarGallery from '../components/CarGallery';
import { featuredCars } from '../data/carData';

const Featured = () => {
  return <CarGallery carData={featuredCars} title="Featured Racers" />;
};

export default Featured;