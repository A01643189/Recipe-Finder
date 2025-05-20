import type { Recipe } from "../types/recipe";
import { Link } from "react-router-dom";

const PLACEHOLDER_IMAGE = "/images/placeholder.png";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const validImage = recipe.image && recipe.image.startsWith("http");

  return (
    <Link to={`/recipe/${recipe.id}`} className="recipe-card">
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
  );
}
