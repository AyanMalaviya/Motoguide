import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CarDescription.css';

const CarDescription = () => {
  const location = useLocation();
  const car = location.state?.car;
  const [activeTab, setActiveTab] = useState('Overview');

  if (!car) {
    return <div className="error-message">Car not found</div>;
  }

  // Car specific description data
  const carDetails = {
    overview: {
      description: `The ${car.name} offers a sorted ride and engaging drive, ample space, and modern-day equipment. While its boot space is limited, it isn't a deal-breaker, especially considering the compact SUV's attractive pricing.`,
      specifications: {
        engine: "2.0L Turbocharged",
        power: "250 HP",
        transmission: "8-Speed Automatic",
        fuelType: "Petrol",
        mileage: "12.5 kmpl"
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return (
          <div className="overview-section">
            <p className="car-description">{carDetails.overview.description}</p>
            <div className="specifications">
              <h3>Key Specifications</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Engine</span>
                  <span className="spec-value">{carDetails.overview.specifications.engine}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Power</span>
                  <span className="spec-value">{carDetails.overview.specifications.power}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Transmission</span>
                  <span className="spec-value">{carDetails.overview.specifications.transmission}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Fuel Type</span>
                  <span className="spec-value">{carDetails.overview.specifications.fuelType}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Mileage</span>
                  <span className="spec-value">{carDetails.overview.specifications.mileage}</span>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div className="coming-soon">Content coming soon...</div>;
    }
  };

  return (
    <div className="car-description-container">
      <div className="car-description-header">
        <div className="car-image-container">
          <img src={car.image} alt={car.name} className="car-main-image" />
        </div>
        <div className="car-header-info">
          <h1 className="car-title">{car.name}</h1>
          <div className="car-price">₹ {car.price}</div>
          <div className="rating-container">
            <div className="expert-rating">
              <span className="rating-star">★</span>
              <span>3.9 Expert Rating</span>
            </div>
            <div className="user-rating">
              <span className="rating-star">★</span>
              <span>4.6 User Rating (500)</span>
            </div>
          </div>
          <a href={car.link} target="_blank" rel="noopener noreferrer" className="official-link-btn">
            Visit Official Page
          </a>
        </div>
      </div>
      
      <div className="car-tabs">
        {['Overview', '360° View', 'Variants', 'Offers', 'Similar Cars', 'Colours', 'Brochure', 'Mileage', 'User Reviews'].map(tab => (
          <button 
            key={tab}
            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default CarDescription;