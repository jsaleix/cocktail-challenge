import { COCKTAIL_API_ENDPOINT } from "../config/endpoints";
import { IngredientInList } from "../types/cocktail";
import { SearchIngredientResponse } from "../types/requests";

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
}

export default new CocktailService();
