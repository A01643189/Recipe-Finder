import { useState } from "react";
import { fetchRecipes } from "../services/api";
import RecipeCard from "../components/RecipeCard";
import type { Recipe } from "../types/recipe";

export default function Search() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    const handleSearch = async () => {
        const results = await fetchRecipes(query);
        setRecipes(results);
    };

    return (
        <div className="search">
            <h1 className="search-title">Search Recipes</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div className="recipe-grid">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
