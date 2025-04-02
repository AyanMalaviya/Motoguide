import React, { useState } from 'react';
import CarCard from './CarCards';

const carData = [
  { name: "BMW M5 CS", image: "https://www.cnet.com/a/img/resize/893c306ba1c40fc4669ccb6ad3a9c4ca49ea613e/hub/2021/01/26/7ef4f068-e577-4d73-9f09-558115777331/2022-bmw-m5-cs-029.jpg?auto=webp&width=1200", price: "1.99 CR" },
  { name: "Audi RS7", image: "https://images.carexpert.com.au/crop/800/533/app/uploads/2023/09/2024-Audi-RS7-Performance-3.jpg", price: "1.55 CR" },
  { name: "Volkswagen GOLF GTI", image: "https://media.ed.edmunds-media.com/volkswagen/golf-gti/2024/oem/2024_volkswagen_golf-gti_4dr-hatchback_380-autobahn_fq_oem_1_1600.jpg", price: "25 Lakhs (USD->INR)" },
  { name: "Lotus Exige", image: "https://www.supercars.net/blog/wp-content/uploads/2020/05/Lotus-Exige-S-V6-2012.jpg", price: "83 Lakhs (USD->INR)" },
  { name: "Mercedes AMG C63 S", image: "https://s3.caradvice.com.au/wp-content/uploads/2016/05/Mercedes-AMG-C63-S-Ed-1-211.jpg", price: "66.4 Lakhs (USD->INR)" },
  { name: "Mercedes AMG G63", image: "https://performancedrive.com.au/wp-content/uploads/2018/03/2018-Mercedes-AMG-G-63.jpg", price: "1.5 CR (USD->INR)" },
  { name: "McLaren Artura", image: "https://autonxt.net/wp-content/uploads/2021/02/2022-McLaren-Artura24.jpg", price: "5.1 CR" },
  { name: "Lamborghini Huracan Evo", image: "https://gomechanic.in/blog/wp-content/uploads/2019/10/2020-lamborghini-huracan-evo-spyder.jpg", price: "4 CR <-> 5 CR" },
  { name: "Ferrari 488 Pista", image: "https://wallpapercave.com/wp/wp2534313.jpg", price: "4.02 CR" },
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
