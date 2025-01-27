"use client";

import CircledArrow from "@/components/icons/circled-arrow";
import BuilderInput from "./builder-input";
import BuilderOutput from "./builder-output";
import { useEffect } from "react";
import { useBuilderContext } from "@/contexts/builder.context";
import { debounce } from "@/lib/utils";

interface Props {
  suggestions: string[];
}

export default function BuilderPage({ suggestions }: Props) {
  const { selectedIngredients, refreshRecipes } = useBuilderContext();

  useEffect(() => {
    debounce(() => {
      refreshRecipes();
    }, 500)();
  }, [selectedIngredients, refreshRecipes]);

  return (
    <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10">
      <BuilderInput suggestions={suggestions} />
      <div className="h-full flex flex-col items-center justify-center rotate-90 lg:rotate-0 ">
        <CircledArrow />
      </div>
      <BuilderOutput />
    </div>
  );
}
