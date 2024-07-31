export interface SavedCocktailI {
  id: string;
  name: string;
  createdAt: string;
}

export type SaveCocktailI = Omit<SavedCocktailI, "createdAt">; 