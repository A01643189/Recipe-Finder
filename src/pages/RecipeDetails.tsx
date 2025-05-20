import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../services/api";
import type { Recipe } from "../types/recipe";

export default function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    if (id) {
      fetchRecipeById(Number(id)).then(setRecipe);
    }
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="recipe-details">
      <h1 className="recipe-details-title">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="recipe-details-image"
      />
      <div
        className="recipe-details-summary"
        dangerouslySetInnerHTML={{ __html: recipe.summary || "" }}
      />
      {recipe.instructions && (
        <>
          <h2 className="recipe-details-subtitle">Instructions</h2>
          <div
            className="recipe-details-instructions"
            dangerouslySetInnerHTML={{ __html: recipe.instructions }}
          />
        </>
      )}
    </div>
  );
}
