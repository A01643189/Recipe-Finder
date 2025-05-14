import type { Recipe } from "../types/recipe";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
    return (
        <div className="recipe-card">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-image"
            />
            <h2 className="recipe-title">{recipe.title}</h2>
        </div>
    );
}
