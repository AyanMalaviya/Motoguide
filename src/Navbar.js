import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">Moto Guide</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active" href="#Home">Featured</a></li>
            <li className="nav-item"><a className="nav-link" href="#HighPower">High Power</a></li>
            <li className="nav-item"><a className="nav-link" href="#HighComfort">High Comfort</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
