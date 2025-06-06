import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { SavedRecipesProvider } from "./context/SavedRecipesContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <SavedRecipesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SavedRecipesProvider>
    </AuthProvider>
  </StrictMode>
);
