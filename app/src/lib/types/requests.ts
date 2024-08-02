import { CocktailFullI, IngredientFullI, IngredientInList } from "./cocktail";

export interface SearchIngredientResponse {
  ingredients: IngredientInList[];
}

export interface ListIngredientsResponse {
  drinks: Array<Record<"strIngredient1", string>>;
}

export interface ListDrinksByIngredientResponse {
  drinks: {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
  }[];
}

export interface SearchCocktailResponse {
  drinks: CocktailFullI[];
}

export interface ListCategoriesResponse {
  drinks: Array<Record<"strCategory", string>>;
}

export interface ListGlassTypesResponse {
  drinks: Array<Record<"strGlass", string>>;
}
