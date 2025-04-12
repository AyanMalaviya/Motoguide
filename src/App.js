import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Featured from './Pages/Featured'; // Adjusted path
import HighComfort from './Pages/HighComfort'; // Adjusted path
import HighPower from './Pages/HighPower'; // Adjusted path
import Home from './Pages/Home'; // Adjusted path
import { CarProvider } from './context/CarContext';

import SearchResults from './components/SearchResult'; // adjust path if needed


function App() {
  return (
    <CarProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/featured" element={<Featured />} />
              <Route path="/highpower" element={<HighPower />} />
              <Route path="/highcomfort" element={<HighComfort />} />
              <Route path="/search" element={<SearchResults />} />
            </Routes>
            <div style={{ background: '#111', minHeight: '0vh' }}>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </CarProvider>
  );
}

export default App;