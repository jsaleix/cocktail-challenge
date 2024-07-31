"use client";
import SearchInput from "@/components/common/search-input";
import { IngredientInList } from "@/lib/types/cocktail";
import { useState } from "react";
import IngredientItem from "./ingredient-item";

interface Props {}

const FAKE_INGREDIENTS = [{ idIngredient: "12", strIngredient: "TEST" }];

export default function BuilderInput({}: Props) {
  const [selectedIngredients, setSelectedIngredients] =
    useState<IngredientInList[]>(FAKE_INGREDIENTS);

  return (
    <section className="min-h-48 w-full md:w-1/3 bg-light-blue rounded rounded-md shadow-2xl">
      <div className="w-full h-full flex flex-col gap-5 p-5">
        <div
          className="flex flex-col gap-5 border-b-2 border-b-gray-500 pb-5"
          id="search"
        >
          <SearchInput placeholder="Search an ingredient" autoFocus />
          <div id="selected-ingredients">
            {selectedIngredients.length == 0 && <p className="italic text-sm text-gray-300">Start adding ingredients</p>}
            {selectedIngredients.length > 0 &&
              selectedIngredients.map((i, k) => (
                <IngredientItem
                  onClick={() => {}}
                  name={i.strIngredient}
                  id={i.idIngredient}
                  key={i.idIngredient}
                />
              ))}
          </div>
        </div>
        <div id="suggestions" className="flex flex-col gap-5">
          <h2 className="text-md font-light">Suggestions:</h2>
          <div id="ingredients-container"></div>
        </div>
      </div>
    </section>
  );
}
