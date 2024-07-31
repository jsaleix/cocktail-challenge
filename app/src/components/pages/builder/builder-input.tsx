"use client";
import SearchInput from "@/components/common/search-input";
import { IngredientInList } from "@/lib/types/cocktail";
import { useEffect, useRef, useState } from "react";
import IngredientItem from "./ingredient-item";
import { debounce } from "@/lib/utils";

interface Props {
  searchIngredient: (query: string) => Promise<IngredientInList[] | null>;
  refreshRecipes: (ingredients: string[]) => void;
}

export default function BuilderInput({
  searchIngredient,
  refreshRecipes,
}: Props) {
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

  useEffect(() => {
    const ingredients = selectedIngredients.map((i) => i.strIngredient);
    debounce(() => {
      refreshRecipes(ingredients);
    }, 500)();
  }, [selectedIngredients]);

  return (
    <section className="min-h-4/5 w-full md:w-1/3 bg-light-blue rounded rounded-md shadow-2xl">
      <div className="w-full h-full flex flex-col gap-5 p-5">
        <div
          className="flex flex-col gap-3 border-b-2 border-b-gray-500 pb-5"
          id="search"
        >
          <SearchIngredientPart
            search={searchIngredient}
            addIngredient={addIngredient}
          />
          <div id="selected-ingredients">
            {selectedIngredients.length == 0 && (
              <p className="italic text-sm text-gray-300">
                Start adding ingredients
              </p>
            )}
            {selectedIngredients.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.map((i, k) => (
                  <IngredientItem
                    onClick={() => removeIngredient(i)}
                    name={i.strIngredient}
                    id={i.idIngredient}
                    key={i.idIngredient}
                  />
                ))}
              </div>
            )}
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

interface SearchIngredientPartProps {
  addIngredient: (i: IngredientInList) => void;
  search: (query: string) => Promise<IngredientInList[] | null>;
}

function SearchIngredientPart({
  search,
  addIngredient,
}: SearchIngredientPartProps) {
  const [results, setResults] = useState<IngredientInList[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const wrapAddIngredient = (i: IngredientInList) => {
    addIngredient(i);
    setInputValue("");
  };

  useEffect(() => {
    if (!inputValue) {
      setResults([]);
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      const res = await search(inputValue);
      if (res) setResults(res);
    }, 500);
  }, [inputValue]);

  return (
    <div className="flex flex-col gap-3">
      <SearchInput
        value={inputValue}
        ref={inputRef}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search an ingredient"
        autoFocus
      />
      <div id="results">
        {results.length > 0 &&
          results.map((i, k) => (
            <IngredientItem
              onClick={() => wrapAddIngredient(i)}
              name={i.strIngredient}
              id={i.idIngredient}
              key={i.idIngredient}
            />
          ))}
      </div>
    </div>
  );
}
