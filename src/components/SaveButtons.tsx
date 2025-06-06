import { useContext } from "react";
import { SavedRecipesContext } from "../context/SavedRecipesContext";

interface Props {
  recipeId: string;
}

export default function SaveButtons({ recipeId }: Props) {
  const { isSaved, saveItem } = useContext(SavedRecipesContext);

  return (
    <div className="save-buttons">
      {(["favorites", "cooked", "toCook"] as const).map((type) => (
        <button
          key={type}
          className="save-button"
          disabled={isSaved(type, recipeId)}
          onClick={() => saveItem(type, recipeId)}
        >
          {isSaved(type, recipeId) ? `✓ ${type}` : `+ ${type}`}
        </button>
      ))}
    </div>
  );
}
