import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './search.css';
import { Link } from 'react-router-dom';

const SearchCuisine = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getRecipes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${id}&number=20&apiKey=${import.meta.env.VITE_Api_key}`
      );
      const data = await response.json();
      setRecipes(data.results || []);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getRecipes();
  }, [id]);

  return (
    <div className="search-results-container">
      <h2 className="search-heading">Search Results for: "{id}"</h2>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : recipes.length > 0 ? (
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <Link to={`/cuisine/details/${recipe.id}`}>

            <div className="recipe-card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} className="recipe-image" />
              <p className="recipe-title">{recipe.title}</p>
            </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="no-results">No recipes found.</p>
      )}
    </div>
  );
};

export default SearchCuisine;
