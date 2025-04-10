import React from 'react';
import './about.css';

const about = () => {
  return (
    <div className="about-container">
      <h1>About Flavour Fusion</h1>
      
      <div className="about-content">
        <img 
          src="/images/iconn.png" 
          alt="Cooking ingredients" 
          className="about-image"
        />
        
        <div className="about-text">
          <h2>Simple Recipes for Everyone</h2>
          <p>
            Flavour Fusion brings you easy-to-follow recipes from around the world. 
            We use the Spoonacular API to deliver thousands of tested recipes right to your screen.
          </p>
          <p>
            No complicated techniques. No hard-to-find ingredients. 
            Just great food made simple.
          </p>
          
          <h3>Our Features:</h3>
          <ul className="features-list">
            <li>Search thousands of recipes</li>
            <li>Filter by cuisine type</li>
         
            <li>Get cooking instructions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default about;