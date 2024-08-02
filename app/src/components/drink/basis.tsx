"use client";

import { CocktailFullI } from "@/lib/types/cocktail";
import clsx from "clsx";
import Actions from "./actions";

interface Props {
  drink: CocktailFullI;
  children?: React.ReactNode;
  compact?: boolean;
}
export default function DrinkBasis({ drink, compact = true }: Props) {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-5">
      <div className="w-full lg:w-2/6 flex flex-col gap-5 items-center">
        <div className={"w-full max-w-80 group-hover:opacity-80"}>
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <Actions drink={drink} />
      </div>

      <div className="w-full lg:w-4/6 text-white flex flex-col gap-5">
        <div id="drink-header" className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold">{drink.strDrink}</h1>
          <div className="flex gap-3 items-center select-none text-sm cursor-pointer text-md flex-wrap">
            <span className="font-light text-yellow-400 bg-transparent border-2 border-yellow-400 rounded-2xl w-fit py-1 px-5 hover:opacity-80">
              {drink.strCategory}
            </span>
            <span className="font-light text-emerald-400 bg-transparent border-2 border-emerald-400 rounded-2xl w-fit py-1 px-5 hover:opacity-80">
              {drink.strAlcoholic}
            </span>
            <span className="font-light text-red-400 bg-transparent border-2 border-red-400 rounded-2xl w-fit py-1 px-5 hover:opacity-80">
              {drink.strGlass}
            </span>
          </div>
        </div>
        <div id="instructions" className="flex flex-col gap-2 w-full">
          <h3 className="text-xl font-semibold">Instructions</h3>
          <p className="text-md text-gray-300">{drink.strInstructions}</p>
        </div>
        {drink.ingredients.length > 0 && (
          <div id="instructions-details" className="flex flex-col gap-3 ">
            <h3 className="text-xl font-semibold">Measures</h3>
            <ul
              className={clsx(
                "border-2 border-gray-500 p-2 rounded-md hideScrollBar",
                compact && "overflow-scroll max-h-40"
              )}
            >
              {drink.ingredients.map(({ ingredient, measure }) => (
                <li
                  key={ingredient}
                  className="flex items-center justify-between"
                >
                  <span className="w-fit text-gray-300">{ingredient}</span>
                  <span className="w-fit text-white font-semibold">
                    {measure}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
