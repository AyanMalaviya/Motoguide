import React from 'react';
import Navbar from './Navbar';
import CarGallery from './CarGallery';

function App() {
  return (
    <div>
      <Navbar />
      <CarGallery />
      <footer className="text-center bg-dark text-light py-3 mt-5">
        <p>&copy; {new Date().getFullYear()} Moto Guide. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
