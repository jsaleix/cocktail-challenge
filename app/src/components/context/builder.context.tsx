"use client";
import { fetchRecipes, searchIngredientAction } from "@/actions/builder";
import { IngredientInList } from "@/lib/types/cocktail";
import { createContext, useContext, useState } from "react";

interface BuilderContextType {
  searchIngredient: (query: string) => Promise<IngredientInList[] | null>;
  addIngredient: (i: IngredientInList) => void;
  removeIngredient: (i: IngredientInList) => void;
  selectedIngredients: IngredientInList[];
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
  const [selectedIngredients, setSelectedIngredients] = useState<
    IngredientInList[]
  >([]);

  const addIngredient = (i: IngredientInList) => {
    if (selectedIngredients.find((x) => x.idIngredient === i.idIngredient))
      return;
    setSelectedIngredients((prev) => [...prev, i]);
  };

  const removeIngredient = (i: IngredientInList) => {
    setSelectedIngredients((prev) =>
      prev.filter((x) => x.idIngredient !== i.idIngredient)
    );
  };

  const refreshRecipes = async () => {
    const ingredients = selectedIngredients.map((i) => i.strIngredient);
    if (ingredients.length === 0) return;
    const res = await fetchRecipes(ingredients);
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
