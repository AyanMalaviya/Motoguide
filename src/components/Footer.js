import React from "react";
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h2 className="footer-title">MotoGuide</h2>
          <p className="footer-description">
            Discover the power, comfort, and speed of the best motorbikes on the market.
            Your ultimate riding companion.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/featured">Featured</a></li>
            <li><a href="/highpower">High Power</a></li>
            <li><a href="/highcomfort">High Comfort</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="mailto:support@motoguide.com"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MotoGuide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
