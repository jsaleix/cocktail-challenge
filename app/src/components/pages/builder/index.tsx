"use client";

import CircledArrow from "@/components/icons/circled-arrow";
import BuilderInput from "./builder-input";
import BuilderOutput from "./builder-output";
import { useEffect } from "react";
import { useBuilderContext } from "@/components/context/builder.context";
import { debounce } from "@/lib/utils";

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
      <CircledArrow />
      <BuilderOutput />
    </div>
  );
}
