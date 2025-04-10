import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './popular.css';
import { Link } from 'react-router-dom';

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    const getVeggie = async () => {
      try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${
            import.meta.env.VITE_Api_key
          }&tags=vegetarian&number=15`
        );
        const data = await api.json();
        setVeggie(data.recipes || []);
      } catch (error) {
        console.error('Failed to fetch vegetarian recipes:', error);
      }
    };

    getVeggie();
  }, []);

  return (
    <div className="veggie-container">
      <h2>VEGETARIAN PICKS</h2>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: 'free',
          gap: '20px',
          breakpoints: {
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {veggie.map((recipe) => (
         
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

export default Veggie;