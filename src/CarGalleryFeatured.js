import React, { useState } from 'react';
import CarCard from './CarCards';

const carData = [
  { name: "Toyota GR Supra", image: "https://cdn.motor1.com/images/mgl/0ANrK/s1/2020-toyota-supra.jpg", price: "85 Lakhs", link: "https://www.toyota.com/gr-supra/" },
  { name: "Nissan GT-R", image: "https://cdn.motor1.com/images/mgl/BE22y/s1/nissan-gt-r-nismo.jpg", price: "2.1 CR", link: "https://www.nissanusa.com/vehicles/sports-cars/gt-r.html" },
  { name: "Chevrolet Corvette Stingray", image: "https://cdn.motor1.com/images/mgl/kWWZ3/s1/2020-chevrolet-corvette-stingray.jpg", price: "1.5 CR", link: "https://www.chevrolet.com/performance/corvette" },
  { name: "BMW M4", image: "https://cdn.motor1.com/images/mgl/QRJoq/s1/2021-bmw-m4.jpg", price: "1.4 CR", link: "https://www.bmw.in/en/all-models/m-series/m4-coupe/2021/bmw-m4-coupe-overview.html" },
  { name: "Audi RS5 Sportback", image: "https://cdn.motor1.com/images/mgl/MbbVm/s1/audi-rs5-sportback.jpg", price: "1.3 CR", link: "https://www.audi.in/in/web/en/models/a5/rs-5-sportback.html" },
  { name: "Jaguar F-Type R", image: "https://cdn.motor1.com/images/mgl/nrrmX/s1/jaguar-f-type-r.jpg", price: "1.2 CR", link: "https://www.jaguar.in/jaguar-range/f-type/models/f-type-r-coupe.html" },
  { name: "Lexus LC 500", image: "https://cdn.motor1.com/images/mgl/9bbVm/s1/lexus-lc-500.jpg", price: "2.1 CR", link: "https://www.lexus.com/models/LC" },
  { name: "Porsche Cayman GT4", image: "https://cdn.motor1.com/images/mgl/Bb2Vm/s1/porsche-718-cayman-gt4.jpg", price: "1 CR", link: "https://www.porsche.com/international/models/718/718-cayman-models/718-cayman-gt4/" },
  { name: "Alfa Romeo Giulia Quadrifoglio", image: "https://cdn.motor1.com/images/mgl/0VVqz/s1/alfa-romeo-giulia-quadrifoglio.jpg", price: "1.1 CR", link: "https://www.alfaromeousa.com/cars/alfa-romeo-giulia" },
  { name: "Maserati Ghibli Trofeo", image: "https://cdn.motor1.com/images/mgl/bqqZK/s1/maserati-ghibli-trofeo.jpg", price: "1.6 CR", link: "https://www.maserati.com/global/en/models/ghibli/trofeo" },
  { name: "Ford Mustang GT", image: "https://cdn.motor1.com/images/mgl/0ANrK/s1/2021-ford-mustang-gt.jpg", price: "80 Lakhs", link: "https://www.ford.com/cars/mustang/models/gt/" },
  { name: "Chevrolet Camaro SS", image: "https://cdn.motor1.com/images/mgl/xWWqN/s1/chevrolet-camaro-ss.jpg", price: "75 Lakhs", link: "https://www.chevrolet.com/performance/camaro/ss" },
  { name: "Tesla Model 3 Performance", image: "https://cdn.motor1.com/images/mgl/0VVqz/s1/tesla-model-3-performance.jpg", price: "70 Lakhs", link: "https://www.tesla.com/model3" },
  { name: "BMW M2 Competition", image: "https://cdn.motor1.com/images/mgl/BBbVm/s1/bmw-m2-competition.jpg", price: "85 Lakhs", link: "https://www.bmw.in/en/all-models/m-series/m2-coupe/2021/bmw-m2-coupe-overview.html" },
  { name: "Audi TT RS", image: "https://cdn.motor1.com/images/mgl/xWWqN/s1/audi-tt-rs.jpg", price: "1.1 CR", link: "https://www.audi.in/in/web/en/models/tt/tt-rs-coupe.html" },
  { name: "Subaru WRX STI", image: "https://cdn.motor1.com/images/mgl/3ooVb/s1/subaru-wrx-sti.jpg", price: "60 Lakhs", link: "https://www.subaru.com/vehicles/wrx/stil.html" },
  { name: "Volkswagen Golf R", image: "https://cdn.motor1.com/images/mgl/9bbVm/s1/volkswagen-golf-r.jpg", price: "55 Lakhs", link: "https://www.vw.com/en/models/golf-r.html" },
  { name: "Honda Civic Type R", image: "https://cdn.motor1.com/images/mgl/2VVqz/s1/honda-civic-type-r.jpg", price: "50 Lakhs", link: "https://www.honda.com/civic-type-r" },
  { name: "Hyundai Elantra N", image: "https://cdn.motor1.com/images/mgl/0oM9e/s1/hyundai-elantra-n.jpg", price: "40 Lakhs", link: "https://www.hyundai.com/worldwide/en/cars/elantra-n" },
  { name: "Kia Stinger GT", image: "https://cdn.motor1.com/images/mgl/lAAK1/s1/kia-stinger-gt.jpg", price: "50 Lakhs", link: "https://www.kia.com/worldwide/vehicles/stinger.do" },
];


const CarGalleryFeatured = () => {
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
      <h2 className="section-title text-center my-4">Featured Cars</h2>

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

export default CarGalleryFeatured;
