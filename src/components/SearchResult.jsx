import React from 'react';
import { useLocation } from 'react-router-dom';
import CarCard from './CarCard';

const SearchResults = () => {
  const location = useLocation();
  const searchResults = location.state?.results || [];

  if (searchResults.length === 0) {
    return (
      <div className="no-results">
        <h2>No cars found matching your search</h2>
      </div>
    );
  }

  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="car-grid">
        {searchResults.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
