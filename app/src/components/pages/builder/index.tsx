"use client";

import CircledArrow from "@/components/icons/circled-arrow";
import BuilderInput from "./builder-input";
import BuilderOutput from "./builder-output";
import { useEffect } from "react";
import { useBuilderContext } from "@/components/context/builder.context";
import { debounce } from "@/lib/utils";
import { IngredientInList } from "@/lib/types/cocktail";

interface Props {
  suggestions: string[];
}

export default function BuilderPage({suggestions}: Props) {
  const { selectedIngredients, refreshRecipes } = useBuilderContext();

  useEffect(() => {
    debounce(() => {
      refreshRecipes();
    }, 500)();
  }, [selectedIngredients]);

  return (
    <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-10">
      <BuilderInput suggestions={suggestions} />
      <div className="h-full flex flex-col items-center justify-center rotate-90 md:rotate-0 ">
        <CircledArrow />
      </div>
      <BuilderOutput />
    </div>
  );
}
