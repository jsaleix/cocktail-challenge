"use client";
import { CocktailFullI } from "@/lib/types/cocktail";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAppContext } from "./app.context";

interface ContextType {
  searchType: string;
  setSearchType: (searchType: SearchType) => void;
  glassTypes: string[];
  categories: string[];
  drinks: CocktailFullI[];
  hideSaved: boolean;
  toggleHideSaved: () => void;
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
  const processedDrinks = useMemo(() => {
    if (!hideSaved) return data;
    return data.filter((d) =>
      savedDrinks.find((sd) => sd.idDrink !== d.idDrink)
    );
  }, [hideSaved, data]);

  const setSearchType = (searchType: SearchType) => {
    if (
      searchType !== searchTypeValues.name &&
      searchType !== searchTypeValues.filters
    )
      return;
    setSearchTypeFn(searchType as SearchType);
  };

  return (
    <SearchContext.Provider
      value={{
        drinks: processedDrinks,
        categories,
        glassTypes,
        searchType,
        setSearchType,
        hideSaved,
        toggleHideSaved: () => setHideSaved((prev) => !prev),
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
