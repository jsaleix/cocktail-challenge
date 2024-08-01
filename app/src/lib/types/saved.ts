export interface SavedCocktailI {
  idDrink: string;
  strDrink: string;
  createdAt: string;
  strDrinkThumb: string
}

export type SaveCocktailI = Omit<SavedCocktailI, "createdAt">; 