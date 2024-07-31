"use client";

import { searchIngredientAction, fetchRecipes } from "@/actions/builder";
import CircledArrow from "@/components/icons/circled-arrow";
import BuilderInput from "./builder-input";
import BuilderOutput from "./builder-output";
import { useState } from "react";

export default function BuilderPage() {
  const [recipes, setRecipes] = useState<any[]>([]);

  const handleRefresh = async (ingredients: string[]) => {
    const res = await fetchRecipes(ingredients);
    if (res) setRecipes(res);
  };
  
  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
      <BuilderInput
        searchIngredient={searchIngredientAction}
        refreshRecipes={handleRefresh}
      />
      <CircledArrow />
      <BuilderOutput recipes={recipes} />
    </div>
  );
}
