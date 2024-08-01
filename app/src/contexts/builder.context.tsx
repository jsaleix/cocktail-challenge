"use client";
import { fetchRecipes, searchIngredientAction } from "@/actions/builder";
import { IngredientInList } from "@/lib/types/cocktail";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";

interface BuilderContextType {
  searchIngredient: (query: string) => Promise<IngredientInList[] | null>;
  addIngredient: (i: string) => void;
  removeIngredient: (i: string) => void;
  selectedIngredients: string[];
  refreshRecipes: () => void;
  recipes: any[];
  recipesLoading: boolean;
  recipesError: any;
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
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const {
    refetch: refreshRecipes,
    data: rawRecipes,
    isFetching: recipesLoading,
    error: recipesError,
  } = useQuery({
    queryKey: ["recipes"],
    queryFn: async () => await fetchRecipes(selectedIngredients),
    refetchOnWindowFocus: false,
  });

  const recipes = rawRecipes ? rawRecipes.slice(0, 5) : [];

  const addIngredient = (i: string) => {
    if (selectedIngredients.includes(i.toLowerCase())) return;
    setSelectedIngredients((prev) => [...prev, i.toLowerCase()]);
  };

  const removeIngredient = (i: string) => {
    setSelectedIngredients((prev) =>
      prev.filter((ing) => ing !== i.toLowerCase())
    );
  };

  const searchIngredient = searchIngredientAction;

  return (
    <BuilderContext.Provider
      value={{
        selectedIngredients,
        addIngredient,
        removeIngredient,
        recipes,
        refreshRecipes,
        searchIngredient,
        recipesLoading,
        recipesError,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
