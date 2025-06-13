import { useEffect, useState, useTransition } from "react"
import { getRecipes } from "../api/recipesData"
import RecipeCard from "../components/UI/RecipeCard";
import { useNavigate } from "react-router-dom";
import { IoFilter } from "react-icons/io5";



const RecipesPage = () => {
  const [isPending, startTransition] = useTransition();
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
  async function fetchData() {
    const res = await getRecipes();

    // Wrap only the state update
    startTransition(() => {
      setRecipes(res.recipes);
    });
  }

  fetchData();
}, []);

  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState("all");
  const handleInputChange = (e) => {
    setQuery(e.target.value.toLowerCase());
    e.preventDefault();
  }
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    
  }

  // search function
  const searchRecipe = (recipe) => {
    if (query) {
      return recipe.name.toLowerCase().includes(query)
    }
    return recipe;
  }

  
  // filter function
  const filters = new Set(recipes.map((recipe) => {
    return recipe.cuisine;
  })); 

  
  const filterRecipe = (recipe) => {
    if (filter === "all") return recipe;
    return recipe.cuisine === filter;
  }
  
  const filteredRecipes = recipes.filter((recipe) => {
    return searchRecipe(recipe) && filterRecipe(recipe)
})


  const handleCardClick = (id) => {
    navigate(`/recipes/${id}`)
  }


  return (
    <div className="container">
      <div className="recipe-op">
        

        <input type="text" placeholder="Search for recipe" className="search-bar" onChange={handleInputChange} />

        <select onChange={handleFilterChange}>
          <option value="all">All (Cuisine)</option>
          {[...filters].map((val, id) => (
            <option value={val} key={id}>{val}</option>
          ))}
        </select>

      </div>
      <div className="recipes">
       
       {filteredRecipes.map((item) => {
        return (
          <div key = {item.id}>
          <RecipeCard item={item} onClick={() => handleCardClick(item.id)} />
          </div>
        )
       })}
      </div>
    </div>
  )
}

export default RecipesPage