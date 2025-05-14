import type { Recipe } from "../types/recipe";
import RecipeCard from "../components/RecipeCard";

const dummyFavorites: Recipe[] = [
    {
        id: 1,
        title: "Favorite Chicken",
        image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
    },
];

export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1 className="dashboard-title">Your Favorite Recipes</h1>
            <div className="recipe-grid">
                {dummyFavorites.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
