export interface CocktailInListI {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export type CocktailFullI = BaseCockTailI & {
  ingredients: Array<InstructionI>;
};

export type InstructionI = { ingredient: string; measure: string };

export type RawCocktailI = Record<string, string> & BaseCockTailI;

interface BaseCockTailI {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
}

export type IngredientInList = Pick<
  IngredientFullI,
  "idIngredient" | "strIngredient"
>;

export interface IngredientFullI {
  idIngredient: string;
  strIngredient: string;
  strDescription: string;
  strType: string;
  strAlcohol: string;
}
