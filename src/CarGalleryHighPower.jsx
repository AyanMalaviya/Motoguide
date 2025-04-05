import React, { useState } from 'react';
import CarCard from './CarCards';

const carData = [
    { name: "Dodge Challenger SRT Hellcat", image: "https://i.gaw.to/content/photos/30/25/302501_2018_Dodge_Challenger.jpg", price: "90 Lakhs", link: "https://www.dodge.com/challenger.html" },
    { name: "Chevrolet Camaro ZL1", image: "https://www.motortrend.com/uploads/2023/08/2024-Chevrolet-Camaro-ZL1-001.jpg", price: "87 Lakhs", link: "https://www.chevrolet.com/performance/camaro/zl1" },
    { name: "Ford Mustang Shelby GT500", image: "https://cdn.motor1.com/images/mgl/Jm22n/s1/2020-ford-mustang-shelby-gt500.jpg", price: "1.12 CR", link: "https://www.ford.com/performance/shelby-gt500/" },
    { name: "Lamborghini Aventador SVJ", image: "https://cdn.motor1.com/images/mgl/0ANrK/s1/lamborghini-aventador-svj.jpg", price: "6 CR", link: "https://www.lamborghini.com/en-en/models/aventador/aventador-svj" },
    { name: "Ferrari SF90 Stradale", image: "https://cdn.motor1.com/images/mgl/pw33R/s1/2020-ferrari-sf90-stradale.jpg", price: "7.5 CR", link: "https://www.ferrari.com/en-EN/auto/sf90-stradale" },
    { name: "Bugatti Chiron", image: "https://cdn.motor1.com/images/mgl/lAAK1/s1/bugatti-chiron.jpg", price: "21 CR", link: "https://www.bugatti.com/en/model-landing/chiron-models" },
    { name: "McLaren 765LT", image: "https://cdn.motor1.com/images/mgl/mrzVm/s1/mclaren-765lt.jpg", price: "6.5 CR", link: "https://cars.mclaren.com/en/super-series/765lt" },
    { name: "Porsche 911 Turbo S", image: "https://cdn.motor1.com/images/mgl/z44J8/s1/2021-porsche-911-turbo-s.jpg", price: "3.5 CR", link: "https://www.porsche.com/international/models/911/911-turbo-models/911-turbo-s/" },
    { name: "Aston Martin DBS Superleggera", image: "https://cdn.motor1.com/images/mgl/YbbVm/s1/aston-martin-dbs-superleggera.jpg", price: "5.5 CR", link: "https://www.astonmartin.com/en/models/dbs-superleggera" },
    { name: "Koenigsegg Jesko", image: "https://cdn.motor1.com/images/mgl/xWWqN/s1/koenigsegg-jesko.jpg", price: "25 CR", link: "https://www.koenigsegg.com/model/jesko" },
    { name: "Pagani Huayra", image: "https://cdn.motor1.com/images/mgl/ZooVb/s1/pagani-huayra.jpg", price: "20 CR", link: "https://www.pagani.com/huayra/" },
    { name: "Ferrari 812 Superfast", image: "https://cdn.motor1.com/images/mgl/0xPPJ/s1/ferrari-812-superfast.jpg", price: "5.75 CR", link: "https://www.ferrari.com/en-EN/auto/812-superfast" },
    { name: "McLaren P1", image: "https://cdn.motor1.com/images/mgl/AAAKx/s1/mclaren-p1.jpg", price: "14 CR", link: "https://cars.mclaren.com/en/legacy/mclaren-p1" },
    { name: "Lamborghini Huracan STO", image: "https://cdn.motor1.com/images/mgl/qLLqN/s1/lamborghini-huracan-sto.jpg", price: "4.99 CR", link: "https://www.lamborghini.com/en-en/models/huracan/huracan-sto" },
    { name: "Porsche 918 Spyder", image: "https://cdn.motor1.com/images/mgl/VbbVm/s1/porsche-918-spyder.jpg", price: "12 CR", link: "https://www.porsche.com/microsite/918-spyder/international.aspx" },
    { name: "Rimac Nevera", image: "https://cdn.motor1.com/images/mgl/00VVq/s1/rimac-nevera.jpg", price: "18 CR", link: "https://www.rimac-automobili.com/nevera/" },
    { name: "Shelby Super Snake", image: "https://cdn.motor1.com/images/mgl/00VVq/s1/shelby-super-snake.jpg", price: "1.3 CR", link: "https://www.shelby.com/Vehicles/Shelby-Super-Snake" },
    { name: "Zenvo TSR-S", image: "https://cdn.motor1.com/images/mgl/b00Vb/s1/zenvo-tsr-s.jpg", price: "16 CR", link: "https://zenvoautomotive.com/models/tsr-s/" },
    { name: "Aston Martin Valkyrie", image: "https://cdn.motor1.com/images/mgl/xWWqN/s1/aston-martin-valkyrie.jpg", price: "27 CR", link: "https://www.astonmartin.com/en/models/valkyrie" },
    { name: "SSC Tuatara", image: "https://cdn.motor1.com/images/mgl/3ooVb/s1/ssc-tuatara.jpg", price: "22 CR", link: "https://www.sscnorthamerica.com/tuatara" },
  ];
  

const CarGalleryHighPower = () => {
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
      <h2 className="section-title text-center my-4">High Power Collection</h2>

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

export default CarGalleryHighPower;
