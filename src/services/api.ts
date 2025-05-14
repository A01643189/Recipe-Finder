const API_KEY = "f7deeef373b944fcb2b3cde67a03ede8";
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (query: string) => {
    const res = await fetch(
        `${BASE_URL}/complexSearch?query=${query}&number=100&apiKey=${API_KEY}`
    );
    const data = await res.json();
    return data.results;
};

export const fetchRecipeById = async (id: number) => {
    const res = await fetch(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
    return await res.json();
};
