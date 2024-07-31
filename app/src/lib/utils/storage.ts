"use client";

import { DRINKS_STORAGE_KEY } from "../config/storage";
import { SavedCocktailI } from "../types/saved";

export const resetStorage = () => {
  localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify([]));
};

export const getItems = (): SavedCocktailI[] => {
  try {
    const res = localStorage.getItem(DRINKS_STORAGE_KEY);
    if (!res) throw new Error("No items in storage");
    const items = JSON.parse(res);
    if (!Array.isArray(items)) throw new Error("Items is not an array");
    return items as SavedCocktailI[];
  } catch (e) {
    resetStorage();
    return [] as SavedCocktailI[];
  }
};

export const saveItems = (items: SavedCocktailI[]) => {
  localStorage.setItem(DRINKS_STORAGE_KEY, JSON.stringify(items));
};
