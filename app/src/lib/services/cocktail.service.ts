"server-only";
import { COCKTAIL_API_ENDPOINT } from "../config/endpoints";
import {
  ListDrinksByIngredientResponse,
  ListIngredientsResponse,
  SearchCocktailResponse,
  SearchIngredientResponse,
} from "../types/requests";
import { authHeaders } from "./auth.headers";

class CocktailService {
  async getRandom() {
    try {
      const endpoint = new URL(COCKTAIL_API_ENDPOINT + "/random.php");
      const req = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!req.ok) {
        throw new Error("Failed to fetch data");
      }
      return await req.json();
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return null;
    }
  }

  async searchIngredient(i: string): Promise<SearchIngredientResponse | null> {
    try {
      const endpoint = new URL(`${COCKTAIL_API_ENDPOINT}/search.php?i=${i}`);
      const req = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!req.ok) {
        throw new Error("Failed to fetch data");
      }
      return (await req.json()) as SearchIngredientResponse;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return null;
    }
  }

  async listIngredients(): Promise<ListIngredientsResponse | null> {
    try {
      const endpoint = new URL(`${COCKTAIL_API_ENDPOINT}//list.php?i=list`);
      const req = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders(),
        },
      });
      if (!req.ok) {
        throw new Error("Failed to fetch data");
      }
      return (await req.json()) as ListIngredientsResponse;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return null;
    }
  }

  async listRecipesByIngredient(ingredient: string) {
    try {
      const endpoint = new URL(
        `${COCKTAIL_API_ENDPOINT}//filter.php?i=${ingredient}`
      );
      const req = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders(),
        },
      });
      if (!req.ok) {
        throw new Error("Failed to fetch data");
      }
      return (await req.json()) as ListDrinksByIngredientResponse;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return [];
    }
  }

  async listRecipesByIngredients(ingredients: string[]) {
    try {
      const endpoint = new URL(
        `${COCKTAIL_API_ENDPOINT}//filter.php?i=${ingredients.join(",")}`
      );
      const req = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders(),
        },
      });
      if (!req.ok) {
        throw new Error("Failed to fetch data");
      }
      return (await req.json()) as ListDrinksByIngredientResponse;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return null;
    }
  }

  async searchCocktail(c: string) {
    try {
      const endpoint = new URL(`${COCKTAIL_API_ENDPOINT}/search.php?s=${c}`);
      const req = await fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...authHeaders(),
        },
      });
      if (!req.ok) {
        throw new Error("Failed to fetch data");
      }
      return (await req.json()) as SearchCocktailResponse;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return null;
    }
  }
}

export default new CocktailService();
