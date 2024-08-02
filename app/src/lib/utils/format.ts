import { CocktailFullI, InstructionI, RawCocktailI } from "../types/cocktail";
import {
  ListCategoriesResponse,
  ListGlassTypesResponse,
} from "../types/requests";

export function mapRawDrink(drink: RawCocktailI): CocktailFullI {
  const {
    idDrink,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
  } = drink;
  const ingredients = Object.entries(drink)
    .filter(([key]) => key.startsWith("strIngredient"))
    .map(([_, value]) => value)
    .filter((v) => v !== null && v !== "");
  const measures = Object.entries(drink)
    .filter(([key]) => key.startsWith("strMeasure"))
    .map(([_, value]) => value)
    .filter((v) => v !== null && v !== "");
  const mappedIngredients = ingredients.reduce((acc, curr, idx) => {
    const measure = measures[idx];
    const ingredient = curr;
    if (!measure || !ingredient) return acc;
    return [...acc, { ingredient, measure }];
  }, [] as InstructionI[]);

  return {
    idDrink,
    strDrink,
    strCategory,
    strAlcoholic,
    strGlass,
    strInstructions,
    strDrinkThumb,
    ingredients: mappedIngredients,
  };
}

export function mapRawCategoryResponse(data: ListCategoriesResponse) {
  return data.drinks.map((drink) => drink.strCategory);
}

export function mapRawGlassTypesResponse(data: ListGlassTypesResponse) {
  return data.drinks.map((drink) => drink.strGlass);
}
