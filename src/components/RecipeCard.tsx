import type { Recipe } from "../types/recipe";
import { Link } from "react-router-dom";
import SaveButtons from "./SaveButtons"; // Add this import

const PLACEHOLDER_IMAGE = "/images/placeholder.png";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const validImage = recipe.image && recipe.image.startsWith("http");

  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`}>
        <img
          src={validImage ? recipe.image : PLACEHOLDER_IMAGE}
          alt={recipe.title}
          className="recipe-image"
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE;
          }}
        />
        <h2 className="recipe-title">{recipe.title}</h2>
      </Link>
      <SaveButtons recipeId={recipe.id.toString()} /> {/* Add this */}
    </div>
  );
}
