import React, { useState } from 'react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInput.trim()) {
      navigate(`/search/${encodeURIComponent(searchInput.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <Link to="/" className="webicon">
          <img className="icons" src="/images/icons.png" alt="Flavourfusion" />
          <p>FlavourFusion</p>
        </Link>
      </div>

      <div className="center-section">
        <Link to="/cuisine/chinese" className="nav-item">
          <img className="icons" src="/images/ricebowl.png" alt="Chinese" />
          <p>Chinese</p>
        </Link>
        <Link to="/cuisine/indian" className="nav-item">
          <img className="icons" src="/images/indii.png" alt="Indian" />
          <p>Indian</p>
        </Link>
        <Link to="/cuisine/french" className="nav-item">
          <img className="icons" src="/images/french.png" alt="French" />
          <p>French</p>
        </Link>
        <Link to="/cuisine/thai" className="nav-item">
          <img className="icons" src="/images/thai.png" alt="Thai" />
          <p>Thai</p>
        </Link>
        <Link to="/aboutus" className="nav-item">
          <img className="icons" src="/images/about.png" alt="About Us" />
          <p>About Us</p>
        </Link>
      </div>

      <div className="right-section">
        <div className="search-container">
          <input
            type="text"
            className="searchbar"
            placeholder="What are you craving?"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <div className="search-icon-link" onClick={handleSearch}>
            <img src="/images/sear.png" alt="Search" className="search-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
