"use server";

import cocktailService from "@/lib/services/cocktail.service";

export async function searchIngredientAction(query: string) {
  "use server";
  if (!query) return [];
  const res = await cocktailService.searchIngredient(query);
  return res ? res.ingredients : [];
}

export async function fetchRecipes(ingredients: string[]) {
  "use server";
  console.log(ingredients);
  return null;
}
