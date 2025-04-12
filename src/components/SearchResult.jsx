import React from 'react';
import { useLocation } from 'react-router-dom';
import CarCard from './CarCard'; // Make sure this is the correct path
import FullCardata from '../data/FullCardata'; // Adjust the path as necessary

const SearchResults = () => {
    const location = useLocation();

    // Extract the search query from URL query params
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('query')?.toLowerCase() || '';

    // Filter the car data based on query
    const filteredCars = FullCardata.filter(car => 
        car.name.toLowerCase().includes(query)
    );

    return (
        <div style={{ padding: '40px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
                {filteredCars.length > 0 
                    ? `Search Results for "${query}"`
                    : `No results found for "${query}"`}
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '20px',
            }}>
                {filteredCars.map((car, index) => (
                    <CarCard
                        key={index}
                        name={car.name}
                        image={car.image}
                        price={car.price}
                        link={car.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
