"use server";

import cocktailService from "@/lib/services/cocktail.service";
import { CocktailInListI } from "@/lib/types/cocktail";

export async function searchIngredientAction(query: string) {
  "use server";
  if (!query) return [];
  const res = await cocktailService.searchIngredient(query);
  return res ? res.ingredients : [];
}

export async function fetchRecipes(
  ingredients: string[]
): Promise<CocktailInListI[]> {
  "use server";
  if (ingredients.length === 0) return [];
  const res = await cocktailService.listRecipesByIngredients(ingredients);
  return res ? res.drinks : [];
}
