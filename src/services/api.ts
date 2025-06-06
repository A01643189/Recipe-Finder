const API_KEY = "e29d97dc466d45cd87774d20675e9203";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (query: string) => {
  const res = await fetch(
    `${BASE_URL}/complexSearch?query=${query}&number=10&apiKey=${API_KEY}`
  );
  const data = await res.json();
  return data.results;
};

export const fetchRecipeById = async (id: number) => {
  const res = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
  return await res.json();
};
