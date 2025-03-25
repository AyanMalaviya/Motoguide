import React, { useState } from 'react';
import CarCard from './CarCards';

const carData = [
  { name: "BMW M5 CS", image: "CarImages/BMW-M5-PNG-Image.png" },
  { name: "Audi RS7", image: "https://www.carscoops.com/wp-content/uploads/2019/08/3969cea6-audi-rs7-rendering.jpg" },
  { name: "Volkswagen GOLF GTI", image: "https://media.ed.edmunds-media.com/volkswagen/golf-gti/2024/oem/2024_volkswagen_golf-gti_4dr-hatchback_380-autobahn_fq_oem_1_1600.jpg" },
  { name: "Lotus Exige", image: "https://www.supercars.net/blog/wp-content/uploads/2020/05/Lotus-Exige-S-V6-2012.jpg" },
  { name: "Mercedes AMG C63 S", image: "https://s3.caradvice.com.au/wp-content/uploads/2016/05/Mercedes-AMG-C63-S-Ed-1-211.jpg" },
  { name: "Mercedes AMG G63", image: "https://www.hdcarwallpapers.com/download/urban_automotive_mercedes_amg_g_63_2024-1920x1080.jpg" },
  { name: "McLaren Artura", image: "https://autonxt.net/wp-content/uploads/2021/02/2022-McLaren-Artura24.jpg" },
  { name: "Lamborghini Huracan Evo", image: "https://gomechanic.in/blog/wp-content/uploads/2019/10/2020-lamborghini-huracan-evo-spyder.jpg" },
  { name: "Ferrari 488 Pista", image: "https://wallpapercave.com/wp/wp2534313.jpg" },
];

const CarGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = carData.filter(car =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="section-title text-center my-4">Featured Collection</h2>
      
      <div className="d-flex justify-content-center mb-4">
        <input 
          type="text"
          className="form-control w-50 search-input"
          placeholder="Search Cars"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="row g-4">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => <CarCard key={index} car={car} />)
        ) : (
          <p className="text-center text-danger fw-bold">No cars found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default CarGallery;
