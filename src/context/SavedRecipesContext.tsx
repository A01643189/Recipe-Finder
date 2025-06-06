import { createContext, useContext, useState, useEffect } from "react";
import { db } from "../services/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuth } from "./AuthContext";

interface SavedRecipes {
  favorites: string[];
  cooked: string[];
  toCook: string[];
}

export const SavedRecipesContext = createContext<any>(null);

export function SavedRecipesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuth();
  const [saved, setSaved] = useState<SavedRecipes>({
    favorites: [],
    cooked: [],
    toCook: [],
  });

  // ✅ Fetch on login or user change
  useEffect(() => {
    const fetchSaved = async () => {
      if (!user) return;
      const ref = doc(db, "users", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        setSaved({
          favorites: Array.isArray(data.favorites) ? data.favorites : [],
          cooked: Array.isArray(data.cooked) ? data.cooked : [],
          toCook: Array.isArray(data.toCook) ? data.toCook : [],
        });
      }
    };

    fetchSaved();
  }, [user]); // Re-run when user changes

  // ✅ Save to Firestore + local state
  const saveItem = async (type: keyof SavedRecipes, recipeId: string) => {
    if (!user) return;
    const newList = [...(saved[type] || []), recipeId];
    const newSaved = { ...saved, [type]: newList };
    setSaved(newSaved);

    await updateDoc(doc(db, "users", user.uid), {
      [type]: newList,
    });
  };

  const isSaved = (type: keyof SavedRecipes, recipeId: string) =>
    Array.isArray(saved[type]) && saved[type].includes(recipeId);

  return (
    <SavedRecipesContext.Provider value={{ saved, isSaved, saveItem }}>
      {children}
    </SavedRecipesContext.Provider>
  );
}
