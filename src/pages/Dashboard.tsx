import { useContext } from "react";
import { SavedRecipesContext } from "../context/SavedRecipesContext";
import { useEffect, useState } from "react";
import { fetchRecipeById } from "../services/api";
import RecipeCard from "../components/RecipeCard";

export default function Dashboard() {
  const { saved } = useContext(SavedRecipesContext);
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const allIds = [...saved.favorites, ...saved.cooked, ...saved.toCook];
      const uniqueIds = [...new Set(allIds)];
      const all = await Promise.all(
        uniqueIds.map((id) => fetchRecipeById(Number(id)))
      );
      setRecipes(all);
    };

    if (saved) load();
  }, [saved]);

  const renderSection = (label: string, ids: string[]) => {
    const filtered = recipes.filter((r) => ids.includes(String(r.id)));
    return (
      <>
        <h2 className="dashboard-title">{label}</h2>
        <div className="recipe-grid">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="dashboard">
      {renderSection("Favorites", saved.favorites)}
      {renderSection("Cooked", saved.cooked)}
      {renderSection("To Cook", saved.toCook)}
    </div>
  );
}
