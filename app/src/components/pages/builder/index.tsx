"use client";

import CircledArrow from "@/components/icons/circled-arrow";
import BuilderInput from "./builder-input";
import BuilderOutput from "./builder-output";
import { useEffect } from "react";
import { useBuilderContext } from "@/components/context/builder.context";
import { debounce } from "@/lib/utils";
import { IngredientInList } from "@/lib/types/cocktail";

interface Props {
  ingredients: IngredientInList[];
}

export default function BuilderPage() {
  const { selectedIngredients, refreshRecipes } = useBuilderContext();

  useEffect(() => {
    debounce(() => {
      refreshRecipes();
    }, 500)();
  }, [selectedIngredients]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
      <BuilderInput />
      <div className="h-full flex flex-col items-center justify-center">
        <CircledArrow />
      </div>
      <BuilderOutput />
    </div>
  );
}
