"use server";

import { FiltersI } from "@/contexts/search.context";
import cocktailService from "@/lib/services/cocktail.service";

export async function searchDrinksByNameAction(name: string) {
  "use server";
  if (!name) return [];
  const res = await cocktailService.searchDrinkByName(name);
  return res ? res.drinks : [];
}

export async function searchDrinkByFiltersAction(filters: FiltersI) {
  "use server";
  const res = await cocktailService.searchDrinkByFilters(filters);
  return res;
}
