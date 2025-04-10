import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Featured from './Pages/Featured';
import HighComfort from './Pages/HighComfort';
import HighPower from './Pages/HighPower';
import Home from './Pages/Home';
import LoginRegister from './Pages/LoginRegister'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/highpower" element={<HighPower />} />
          <Route path="/highcomfort" element={<HighComfort />} />
          <Route path="/loginregister" element={<LoginRegister />} />
        </Routes>
        
        <footer className="text-center bg-dark text-light py-3 mt-5">
          <p>&copy; {new Date().getFullYear()} Moto Guide. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
