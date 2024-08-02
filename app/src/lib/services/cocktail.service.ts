"server-only";
import { FiltersI } from "@/contexts/search.context";
import { COCKTAIL_API_ENDPOINT } from "../config/endpoints";
import { RawCocktailI } from "../types/cocktail";
import {
  ListCategoriesResponse,
  ListDrinksByIngredientResponse,
  ListGlassTypesResponse,
  ListIngredientsResponse,
  SearchCocktailByFilterResponse,
  SearchCocktailResponse,
  SearchIngredientResponse,
} from "../types/requests";
import {
  mapRawCategoryResponse,
  mapRawGlassTypesResponse,
} from "../utils/format";
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
      const data = await req.json();
      if (!data?.ingredients || !Array.isArray(data.ingredients))
        throw new Error("Invalid data");
      return data as SearchIngredientResponse;
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
      const data = await req.json();
      if (!data?.drinks || !Array.isArray(data.drinks))
        throw new Error("Invalid data");
      return data as ListDrinksByIngredientResponse;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return null;
    }
  }

  async searchDrinkByName(d: string) {
    try {
      const endpoint = new URL(`${COCKTAIL_API_ENDPOINT}/search.php?s=${d}`);
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

  async searchDrinkByFilters(f: Partial<FiltersI>) {
    try {
      const { alcoholic, category, glass } = f;
      const filters = {
        ...(alcoholic && { a: alcoholic.replace(" ", "_") }),
        ...(category && { c: category.replace(" ", "_") }),
        ...(glass && { g: glass.replace(" ", "_") }),
      };
      const filtersToString = new URLSearchParams(filters).toString();

      const endpoint = new URL(
        `${COCKTAIL_API_ENDPOINT}/filter.php?${filtersToString}`
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
      const data = (await req.json()) as SearchCocktailByFilterResponse;
      if (Array.isArray(data?.drinks)) {
        return data.drinks;
      } else {
        throw new Error("Invalid data");
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return [];
    }
  }

  async findDrinkById(id: string) {
    try {
      const endpoint = new URL(`${COCKTAIL_API_ENDPOINT}/lookup.php?i=${id}`);
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
      const data = await req.json();
      if (!data?.drinks || !Array.isArray(data.drinks))
        throw new Error("Invalid data");
      return data.drinks[0] as RawCocktailI;
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return null;
    }
  }

  async listCategories() {
    try {
      const endpoint = new URL(`${COCKTAIL_API_ENDPOINT}/list.php?c=list`);
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
      const data = await req.json();
      if (!data?.drinks || !Array.isArray(data.drinks))
        throw new Error("Invalid data");
      return mapRawCategoryResponse(data as ListCategoriesResponse);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return [];
    }
  }

  async listGlassTypes() {
    try {
      const endpoint = new URL(`${COCKTAIL_API_ENDPOINT}/list.php?g=list`);
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
      const data = await req.json();
      if (!data?.drinks || !Array.isArray(data.drinks))
        throw new Error("Invalid data");
      return mapRawGlassTypesResponse(data as ListGlassTypesResponse);
    } catch (e) {
      if (e instanceof Error) {
        console.error(e.message);
      } else {
        console.error(e);
      }
      return [];
    }
  }
}
const service = new CocktailService();
export default service;
