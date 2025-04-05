import React, { useState } from 'react';
import CarCard from './CarCards';

const carData = [
    { name: "Mercedes-Benz S-Class", image: "https://cdn.motor1.com/images/mgl/z44J8/s1/2021-mercedes-s-class.jpg", price: "1.7 CR", link: "https://www.mercedes-benz.com/s-class" },
    { name: "BMW 7 Series", image: "https://cdn.motor1.com/images/mgl/KbVVx/s1/2023-bmw-7-series.jpg", price: "1.8 CR", link: "https://www.bmw.in/en/all-models/7-series/sedan/2022/bmw-7-series-sedan-overview.html" },
    { name: "Audi A8L", image: "https://cdn.motor1.com/images/mgl/7qqZK/s1/2022-audi-a8l.jpg", price: "1.6 CR", link: "https://www.audi.in/a8l" },
    { name: "Lexus LS 500h", image: "https://cdn.motor1.com/images/mgl/2VbVm/s1/lexus-ls-500h.jpg", price: "2.2 CR", link: "https://www.lexus.com/models/LS" },
    { name: "Jaguar XJL", image: "https://cdn.motor1.com/images/mgl/70bbp/s1/jaguar-xj.jpg", price: "1.2 CR", link: "https://www.jaguar.in/jaguar-range/xj/models/index.html" },
    { name: "Volvo S90", image: "https://cdn.motor1.com/images/mgl/zww3e/s1/2022-volvo-s90.jpg", price: "75 Lakhs", link: "https://www.volvocars.com/in/cars/new-models/s90/" },
    { name: "Genesis G90", image: "https://cdn.motor1.com/images/mgl/vvZOK/s1/2023-genesis-g90.jpg", price: "85 Lakhs", link: "https://www.genesis.com/worldwide/en/models/g90.html" },
    { name: "Rolls-Royce Ghost", image: "https://cdn.motor1.com/images/mgl/JOXXQ/s1/2021-rolls-royce-ghost.jpg", price: "7 CR", link: "https://www.rolls-roycemotorcars.com/en-GB/showroom/ghost.html" },
    { name: "Bentley Flying Spur", image: "https://cdn.motor1.com/images/mgl/ZWWxq/s1/2021-bentley-flying-spur.jpg", price: "5 CR", link: "https://www.bentleymotors.com/en/models/flying-spur.html" },
    { name: "Porsche Panamera", image: "https://cdn.motor1.com/images/mgl/lAAK1/s1/2021-porsche-panamera.jpg", price: "1.6 CR", link: "https://www.porsche.com/international/models/panamera/" },
    { name: "Tesla Model S", image: "https://cdn.motor1.com/images/mgl/0xV2q/s1/2021-tesla-model-s.jpg", price: "1.5 CR", link: "https://www.tesla.com/models" },
    { name: "Lincoln Continental", image: "https://cdn.motor1.com/images/mgl/0oM9e/s1/2020-lincoln-continental.jpg", price: "80 Lakhs", link: "https://www.lincoln.com/luxury-cars/continental/" },
    { name: "Hyundai Grandeur", image: "https://cdn.motor1.com/images/mgl/2PPbv/s1/2023-hyundai-grandeur.jpg", price: "55 Lakhs", link: "https://www.hyundai.com/worldwide/en/cars/grandeur" },
    { name: "Cadillac CT6", image: "https://cdn.motor1.com/images/mgl/ZbbVm/s1/cadillac-ct6.jpg", price: "1 CR", link: "https://www.cadillac.com/sedans/ct6-sedan" },
    { name: "Infiniti Q70L", image: "https://cdn.motor1.com/images/mgl/0MMaP/s1/infiniti-q70l.jpg", price: "90 Lakhs", link: "https://www.infinitiusa.com/vehicles/sedans/q70.html" },
    { name: "Chrysler 300", image: "https://cdn.motor1.com/images/mgl/YbbVm/s1/2023-chrysler-300.jpg", price: "70 Lakhs", link: "https://www.chrysler.com/300.html" },
    { name: "Kia K900", image: "https://cdn.motor1.com/images/mgl/LbbVm/s1/kia-k900.jpg", price: "85 Lakhs", link: "https://www.kia.com/worldwide/vehicles/k900.do" },
    { name: "Genesis G80", image: "https://cdn.motor1.com/images/mgl/8bbVm/s1/genesis-g80.jpg", price: "65 Lakhs", link: "https://www.genesis.com/worldwide/en/models/g80.html" },
    { name: "Toyota Crown", image: "https://cdn.motor1.com/images/mgl/30Vbx/s1/2023-toyota-crown.jpg", price: "55 Lakhs", link: "https://www.toyota.com/crown/" },
    { name: "Skoda Superb", image: "https://cdn.motor1.com/images/mgl/7VVmx/s1/skoda-superb.jpg", price: "45 Lakhs", link: "https://www.skoda-auto.com/models/range/superb" },
  ];
  

const CarGalleryHighComfort = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredCars = carData.filter(car => {
    const nameMatch = car.name.toLowerCase().includes(searchTerm.toLowerCase());

    const priceString = car.price.toUpperCase();
    let numericPrice = 0;

    if (priceString.includes("CR")) {
      numericPrice = parseFloat(priceString) * 100; // Convert CR to Lakhs
    } else if (priceString.includes("LAKH")) {
      numericPrice = parseFloat(priceString);
    } else {
      numericPrice = parseFloat(priceString); // fallback
    }

    const maxPriceNumber = parseFloat(maxPrice);

    const priceMatch = isNaN(maxPriceNumber) || numericPrice <= maxPriceNumber;

    return nameMatch && priceMatch;
  });

  return (
    <div className="container">
      <h2 className="section-title text-center my-4">High Comfort Collection</h2>

      {/* Search Inputs */}
      <div className="d-flex justify-content-center mb-4 gap-3">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search by Car Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          className="form-control w-25"
          placeholder="Max Price (Lakhs)"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
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

export default CarGalleryHighComfort;
