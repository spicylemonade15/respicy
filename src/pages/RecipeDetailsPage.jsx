import { useParams } from "react-router-dom";
import { getRecipe } from "../api/recipesData";
import { startTransition, useEffect, useState } from "react";

const RecipeDetailsPage = () => {
  const [recipe, setRecipe] = useState({
    "ingredients": [],
    "instructions": []
  });
  const params = useParams();

  useEffect(() => {
    const fetchInfo = async () => {
      const response = await getRecipe(params.id);
      
      startTransition(() => {
        setRecipe(response);
      })
    }

    fetchInfo();
  }, [])
  return (
    <div className="container">
      <div className="recipe-details">
        <img src={recipe.image} alt={recipe.name} className="recipe-image"></img>
        <div className="recipe-content">

        <h1>{recipe.name}</h1>

        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((item, id) => {
            return <li key={id}>{item}</li>
          })}
        </ul>

        <h2>Instructions</h2> 
        <ul>
          {recipe.instructions.map((item, id) => {
            return <li key={id}>{item}</li>
          })}
        </ul>
        </div>


        </div>
      </div>

  )
}

export default RecipeDetailsPage