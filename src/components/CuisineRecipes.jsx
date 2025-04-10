import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './cuisine.css'
import { Link } from 'react-router-dom';

const CuisineRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams(); // Using 'id' from URL params

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
            import.meta.env.VITE_Api_key
          }&cuisine=${id}&number=30`
        );
        const data = await response.json();
        setRecipes(data.results || []); // Fallback to empty array
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, [id]); // Using 'id' as dependency

  return (
    <div className="cuisine-recipes">
      <h2>{id.charAt(0).toUpperCase() + id.slice(1)} Recipes</h2>
      {recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((item) => (
            <Link to={`/cuisine/details/${item.id}`} className="recipe-link">
            <div className="recipe-card" key={item.id}>
              <div className="recipe-image-container">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="recipe-image"
                />
              </div>
              <p className="recipe-title">{item.title}</p>
            </div>
          </Link>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CuisineRecipes;