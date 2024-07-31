"use client";
import SearchInput from "@/components/common/search-input";
import { IngredientInList } from "@/lib/types/cocktail";
import { useEffect, useMemo, useRef, useState } from "react";
import IngredientItem from "./ingredient-item";
import { useBuilderContext } from "@/components/context/builder.context";

interface Props {
  suggestions: string[];
}

export default function BuilderInput({ suggestions }: Props) {
  const { selectedIngredients, removeIngredient, addIngredient } =
    useBuilderContext();
  const filteredSuggestions = useMemo(() => {
    return suggestions.filter((s) => !selectedIngredients.includes(s.toLowerCase()));
  }, [suggestions, selectedIngredients]);

  return (
    <section className="min-h-4/5 w-full md:w-1/3 bg-light-blue rounded rounded-md shadow-2xl">
      <div className="w-full h-full flex flex-col gap-5 p-5">
        <div
          className="flex flex-col gap-3 border-b-2 border-b-gray-500 pb-5"
          id="search"
        >
          <SearchIngredientPart />
          <div id="selected-ingredients">
            {selectedIngredients.length == 0 && (
              <p className="italic text-sm text-gray-300">
                Start adding ingredients
              </p>
            )}
            {selectedIngredients.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedIngredients.map((i) => (
                  <IngredientItem
                    onClick={() => removeIngredient(i)}
                    name={i}
                    key={i}
                    showCross
                  />
                ))}
              </div>
            )}
          </div>
        </div>
        <div id="suggestions" className="flex flex-col gap-5">
          <h2 className="text-md font-light">Suggestions:</h2>
          <div id="ingredients-container" className="flex flex-wrap gap-2">
            {filteredSuggestions.map((i) => (
              <IngredientItem
                onClick={() => addIngredient(i)}
                name={i}
                key={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface SearchIngredientPartProps {}

function SearchIngredientPart({}: SearchIngredientPartProps) {
  const [results, setResults] = useState<IngredientInList[]>([]);
  const [inputValue, setInputValue] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { addIngredient, searchIngredient } = useBuilderContext();

  const wrapAddIngredient = (i: string) => {
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
      const res = await searchIngredient(inputValue);
      if (res) setResults(res);
    }, 500);
  }, [inputValue]);

  return (
    <div className="flex flex-col gap-3">
      <SearchInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search an ingredient"
        autoFocus
      />
      <div id="results">
        {results.length > 0 &&
          results.map((i, k) => (
            <IngredientItem
              onClick={() => wrapAddIngredient(i.strIngredient)}
              name={i.strIngredient}
              key={i.idIngredient}
            />
          ))}
      </div>
    </div>
  );
}
