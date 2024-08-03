"use client";
import { CocktailFullI } from "@/lib/types/cocktail";
import { createContext, useContext, useMemo, useState } from "react";
import { useAppContext } from "./app.context";
import {
  searchDrinkByFiltersAction,
  searchDrinksByNameAction,
} from "@/actions/browse";

export interface FiltersI {
  alcoholic?: string;
  category?: string;
  glass?: string;
}

interface ContextType {
  searchType: string;
  glassTypes: string[];
  categories: string[];
  drinks: CocktailFullI[];
  hideSaved: boolean;
  toggleHideSaved: () => void;
  searchByName: (name: string) => Promise<void>;
  searchByFilters: (filters: FiltersI) => Promise<void>;
  loading: boolean;
}

const SearchContext = createContext<ContextType | null>(null);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider"
    );
  }
  return context;
};

export const searchTypeValues = {
  name: "name",
  filters: "filters",
} as const;

type ObjectType<t> = t[keyof t];
type SearchType = ObjectType<typeof searchTypeValues>;

interface Props {
  children: React.ReactNode;
  categories: string[];
  glassTypes: string[];
  data: CocktailFullI[];
}

export const SearchContextProvider = ({
  data,
  categories,
  glassTypes,
  children,
}: Props) => {
  const { savedDrinks } = useAppContext();
  const [hideSaved, setHideSaved] = useState(false);
  const [searchType, setSearchTypeFn] = useState<SearchType>(
    searchTypeValues.name
  );
  const [drinks, setDrinks] = useState<CocktailFullI[]>(data);
  const [loading, setLoading] = useState(false);

  const processedDrinks = useMemo(() => {
    if (!hideSaved) return drinks;
    return drinks.filter((d) =>
      !savedDrinks.find((sd) => sd.idDrink === d.idDrink)
    );
  }, [savedDrinks, hideSaved, drinks]);

  const setSearchType = (searchType: SearchType) => {
    if (
      searchType !== searchTypeValues.name &&
      searchType !== searchTypeValues.filters
    )
      return;
    setSearchTypeFn(searchType as SearchType);
  };

  const searchByFilters = async (filters: FiltersI) => {
    try {
      setSearchType(searchTypeValues.filters);
      setLoading(true);
      const r = (await searchDrinkByFiltersAction(filters)) || [];
      setDrinks(r);
    } catch (e) {
      console.error(e);
      setDrinks([]);
    } finally {
      setLoading(false);
    }
  };

  const searchByName = async (name: string) => {
    try {
      setSearchType(searchTypeValues.name);
      setLoading(true);
      const r = (await searchDrinksByNameAction(name || " ")) || [];
      setDrinks(r);
    } catch (e) {
      console.error(e);
      setDrinks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        drinks: processedDrinks,
        categories,
        glassTypes,
        searchType,
        hideSaved,
        toggleHideSaved: () => setHideSaved((prev) => !prev),
        searchByName,
        searchByFilters,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
