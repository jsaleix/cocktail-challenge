"use client";

import { useBuilderContext } from "@/contexts/builder.context";
import RecipeItem from "@/components/recipe";
import Loader from "@/components/common/loader";

interface Props {}

export default function BuilderOutput({}: Props) {
  const { recipes, recipesLoading } = useBuilderContext();

  return (
    <section className="min-h-4/5 w-full md:w-1/3 rounded rounded-md shadow-2xl bg-gradient-to-r from-light-blue to-slightly-darker-blue ">
      <div className="w-full h-full flex flex-col gap-5 p-5">
        <h2 className="text-xl font-semibold">
          Recipes ({recipes.length.toString()})
        </h2>
        {recipesLoading && <Loader />}
        {!recipesLoading && (
          <div className="flex flex-col" id="recipes-container">
            {recipes.length == 0 && (
              <div className="italic text-sm text-gray-300">
                <p>No recipes found.</p>
                <p>Try adding or removing ingredients.</p>
              </div>
            )}
            {recipes.length > 0 && (
              <div className="overflow-hidden rounded-md">
                {recipes.map((r) => (
                  <RecipeItem key={r.strDrink} cocktail={r} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
