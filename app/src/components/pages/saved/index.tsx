"use client";

import Divider from "@/components/common/divider";
import { CocktailFullI } from "@/lib/types/cocktail";
import { useMemo, useState } from "react";
import RecipeItem from "@/components/recipe";
import { useAppContext } from "@/contexts/app.context";
import Header from "./header";

interface Props {}

export default function SavedPage({}: Props) {
  const { savedDrinks } = useAppContext();
  const [recentFirst, setRecentFirst] = useState(false);
  const likedDrinks = useMemo(() => {
    if (recentFirst) {
      return [...savedDrinks].reverse();
    }
    return savedDrinks;
  }, [savedDrinks, recentFirst]);

  return (
    <div className="flex flex-col gap-5 p-5 h-full w-full lg:w-2/3 bg-gradient-to-r from-light-blue to-slightly-darker-blue shadow-2xl rounded-md">
      <Header toggleSort={() => setRecentFirst((l) => !l)} />
      <Divider />
      <div className="flex flex-col h-96 items-center">
        {likedDrinks.length === 0 && (
          <p className="italic text-sm text-gray-300">
            You did not like any drink yet
          </p>
        )}
        <div
          className="h-full w-full overflow-scroll hideScrollBar"
          style={{ height: "100%" }}
        >
          {likedDrinks.length > 0 &&
            likedDrinks.map((d) => (
              <RecipeItem cocktail={d} key={d.strDrink} />
            ))}
        </div>
      </div>
    </div>
  );
}
