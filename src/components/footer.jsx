import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section about">
          <h3>FlavourFusion</h3>
          <p>A simple project-based on food recipe site using the Spoonacular API.</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/cuisine/indian">Indian</Link></li>
            <li><Link to="/cuisine/chinese">Chinese</Link></li>
            <li><Link to="/cuisine/french">French</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact</h4>
          <p>Email: 1504aniket@gmail.com.com</p>
          <p>GitHub: <a href="https://github.com/1504aniket" target="_blank">1504aniket</a></p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 FlavourFusion. </p>
      </div>
    </footer>
  );
};

export default Footer;
