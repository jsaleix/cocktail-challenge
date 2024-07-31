import { IngredientInList } from "./cocktail";

export interface SearchIngredientResponse {
  ingredients: IngredientInList[];
}

export interface ListIngredientsResponse {
  drinks: Array<Record<"strIngredient1", string>>;
}
