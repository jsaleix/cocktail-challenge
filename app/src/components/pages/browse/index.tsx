"use client";

import Divider from "@/components/common/divider";
import SearchForm from "./search-form";
import { CocktailFullI } from "@/lib/types/cocktail";
import { useState } from "react";
import RecipeItem from "@/components/recipe";

interface Props {
  initialData: CocktailFullI[];
  categories: string[];
  glassTypes: string[];
}

export default function BrowsePage({ initialData, categories, glassTypes }: Props) {
  const [drinks, _] = useState<CocktailFullI[]>(initialData);

  return (
    <div className="flex flex-col gap-5 p-5 h-full w-full lg:w-2/3 bg-gradient-to-r from-light-blue to-slightly-darker-blue shadow-2xl rounded-md">
      <SearchForm categories={categories} glassTypes={glassTypes} />
      <Divider />
      <div className="flex flex-col h-96 items-center">
        {drinks.length === 0 && (
          <p className="italic text-sm text-gray-300">No drink found :/</p>
        )}
        <div
          className="h-full w-full overflow-scroll hideScrollBar"
          style={{ height: "100%" }}
        >
          {drinks.length > 0 &&
            drinks.map((d) => <RecipeItem cocktail={d} key={d.strDrink} />)}
        </div>
      </div>
    </div>
  );
}
