import { CocktailFullI, InstructionI, RawCocktailI } from "../types/cocktail";

export default function mapRawDrink(drink: RawCocktailI): CocktailFullI {
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
