import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './popular.css';
import { Link } from 'react-router-dom';
const Popular = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    

    const getPopular = async () => {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_Api_key
          }&number=15`
        );
        const data = await api.json();
        if (data.recipes) {
          setPopular(data.recipes);
          
        }
      } catch (error) {
        console.error('Failed to fetch popular recipes:', error);
      }
    };

    getPopular();
  }, []);

  return (
    <div className="popular-container">
      <h2>POPULAR PICKS</h2>
      <Splide
        options={{
          perPage: 4,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '30px',
          breakpoints: {
            1024: {
              perPage: 3,
            },
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {popular.map((recipe) => (
          
          <SplideSlide key={recipe.id}>
            <Link to={`/cuisine/details/${recipe.id}`}>
            <div className="card">
              <img src={recipe.image} alt={recipe.title} />
              <p className="recipe-text">{recipe.title}</p>
            </div>
            </Link>
          </SplideSlide>
          
        ))}
      </Splide>
    </div>
  );
};

export default Popular;