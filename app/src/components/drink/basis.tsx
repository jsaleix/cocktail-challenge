"use client";

import { CocktailFullI } from "@/lib/types/cocktail";
import Btn from "../common/btn";
import clsx from "clsx";
import { useAppContext } from "../../contexts/app.context";

interface Props {
  drink: CocktailFullI;
  children?: React.ReactNode;
  compact?: boolean;
}
export default function DrinkBasis({ drink, compact = true }: Props) {
  const { isLiked, saveItem, removeItem } = useAppContext();
  const liked = isLiked(drink.idDrink);

  const toggleSave = () => {
    if (liked) {
      removeItem(drink.idDrink);
    } else {
      saveItem({
        idDrink: drink.idDrink,
        strDrink: drink.strDrink,
        strDrinkThumb: drink.strDrinkThumb,
      });
    }
  };

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
        <div className="flex flex-col gap-3 w-full">
          {!liked && (
            <Btn onClick={toggleSave}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8541 7.50879H8.23804V13.1248H6.36603V7.50879H0.75V5.63678H6.36603V0.020752H8.23804V5.63678H13.8541V7.50879Z"
                  fill="white"
                  className="group-hover:fill-black duration-500"
                />
              </svg>
              Save
            </Btn>
          )}
          {liked && (
            <Btn reverse onClick={toggleSave}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 2.91L13.09 0L8 5.09L2.91 0L0 2.91L5.09 8L0 13.09L2.91 16L8 10.91L13.09 16L16 13.09L10.91 8L16 2.91Z"
                  fill="black"
                  className="group-hover:fill-white duration-500"
                />
              </svg>
              Remove
            </Btn>
          )}
          <Btn>
            <svg
              width="15"
              height="17"
              viewBox="0 0 15 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 17C11.8056 17 11.2153 16.7521 10.7292 16.2563C10.2431 15.7604 10 15.1583 10 14.45C10 14.3508 10.0069 14.248 10.0208 14.1414C10.0347 14.0349 10.0556 13.9394 10.0833 13.855L4.20833 10.37C3.97222 10.5825 3.70833 10.7491 3.41667 10.8698C3.125 10.9905 2.81944 11.0506 2.5 11.05C1.80556 11.05 1.21528 10.8021 0.729167 10.3063C0.243056 9.81042 0 9.20833 0 8.5C0 7.79167 0.243056 7.18958 0.729167 6.69375C1.21528 6.19792 1.80556 5.95 2.5 5.95C2.81944 5.95 3.125 6.01035 3.41667 6.13105C3.70833 6.25175 3.97222 6.41807 4.20833 6.63L10.0833 3.145C10.0556 3.06 10.0347 2.96452 10.0208 2.85855C10.0069 2.75258 10 2.64973 10 2.55C10 1.84167 10.2431 1.23958 10.7292 0.74375C11.2153 0.247917 11.8056 0 12.5 0C13.1944 0 13.7847 0.247917 14.2708 0.74375C14.7569 1.23958 15 1.84167 15 2.55C15 3.25833 14.7569 3.86042 14.2708 4.35625C13.7847 4.85208 13.1944 5.1 12.5 5.1C12.1806 5.1 11.875 5.03993 11.5833 4.9198C11.2917 4.79967 11.0278 4.63307 10.7917 4.42L4.91667 7.905C4.94444 7.99 4.96528 8.08577 4.97917 8.1923C4.99306 8.29883 5 8.4014 5 8.5C5 8.5986 4.99306 8.70145 4.97917 8.80855C4.96528 8.91565 4.94444 9.01113 4.91667 9.095L10.7917 12.58C11.0278 12.3675 11.2917 12.2012 11.5833 12.081C11.875 11.9609 12.1806 11.9006 12.5 11.9C13.1944 11.9 13.7847 12.1479 14.2708 12.6438C14.7569 13.1396 15 13.7417 15 14.45C15 15.1583 14.7569 15.7604 14.2708 16.2563C13.7847 16.7521 13.1944 17 12.5 17Z"
                fill="white"
                className="group-hover:fill-black duration-500"
              />
            </svg>
            Share
          </Btn>
        </div>
      </div>

      <div className="w-full lg:w-4/6 text-white flex flex-col gap-5">
        <div className="flex flex-col gap-3">
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
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-xl font-semibold">Instructions</h3>
          <p className="text-md text-gray-300">{drink.strInstructions}</p>
        </div>
        {drink.ingredients.length > 0 && (
          <div className="flex flex-col gap-3 ">
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
