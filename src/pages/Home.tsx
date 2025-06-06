import { useEffect, useState } from "react";
import { fetchRecipes } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import type { Recipe } from "../types/recipe";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes("chicken").then((data) => {
      console.log("Fetched recipes:", data);
      setRecipes(data);
    });
  }, []);

  return (
    <div className="home">
      <h1 className="home-title">Popular Chicken Recipes</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}
