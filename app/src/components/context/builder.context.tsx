"use client";
import { fetchRecipes, searchIngredientAction } from "@/actions/builder";
import { IngredientInList } from "@/lib/types/cocktail";
import { createContext, useContext, useState } from "react";

interface BuilderContextType {
  searchIngredient: (query: string) => Promise<IngredientInList[] | null>;
  addIngredient: (i: string) => void;
  removeIngredient: (i: string) => void;
  selectedIngredients: string[];
  refreshRecipes: () => void;
  recipes: any[];
}

const BuilderContext = createContext<BuilderContextType | null>(null);

export const useBuilderContext = () => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilderContext must be used within a BuilderProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const BuilderProvider = ({ children }: Props) => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const addIngredient = (i: string) => {
    if (selectedIngredients.includes(i.toLowerCase())) return;
    setSelectedIngredients((prev) => [...prev, i.toLowerCase()]);
  };

  const removeIngredient = (i: string) => {
    setSelectedIngredients((prev) =>
      prev.filter((ing) => ing !== i.toLowerCase())
    );
  };

  const refreshRecipes = async () => {
    if (selectedIngredients.length === 0) {
      setRecipes([]);
      return;
    }
    const res = await fetchRecipes(selectedIngredients);
    if (res) setRecipes(res);
  };

  const searchIngredient = searchIngredientAction;

  return (
    <BuilderContext.Provider
      value={{
        recipes,
        selectedIngredients,
        addIngredient,
        removeIngredient,
        refreshRecipes,
        searchIngredient,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
