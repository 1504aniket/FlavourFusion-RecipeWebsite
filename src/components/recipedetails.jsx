import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './recipedetails.css';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_Api_key}`
        );
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="loading">Loading recipe...</div>;
  if (!recipe) return <div className="error">Recipe not found</div>;

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      
      <div className="recipe-header">
      <img
  src={recipe.image}
  alt={recipe.title}
  style={{
    width: '90%',
    height:'80%',
    maxHeight: '450px',
    objectFit: 'contain',
    borderRadius: '12px',
    display: 'block',
    margin: '0 auto'
  }}
/>

        
        <div className="recipe-meta">
          <div className="meta-item">
            <span>⏱️</span>
            <p>{recipe.readyInMinutes} mins</p>
          </div>
          <div className="meta-item">
            <span>👥</span>
            <p>Serves {recipe.servings}</p>
          </div>
          {recipe.diets && (
            <div className="meta-item">
              <span>🥗</span>
              <p>{recipe.diets.join(', ')}</p>
            </div>
          )}
        </div>
      </div>

      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>

        <div className="instructions">
          <h2>Instructions</h2>
          <div dangerouslySetInnerHTML={{ __html: recipe.instructions || 'No instructions provided' }} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;