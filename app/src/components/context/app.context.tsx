"use client";
import { SaveCocktailI, SavedCocktailI } from "@/lib/types/saved";
import { getItems, saveItems } from "@/lib/utils/storage";
import { createContext, useContext, useEffect, useState } from "react";

interface StorageContextType {
  savedDrinks: SavedCocktailI[];
  saveItem: (item: SaveCocktailI) => void;
  removeItem: (id: string) => void;
  isLiked: (id: string) => boolean;
}

const AppContext = createContext<StorageContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

interface Props {
  children: React.ReactNode;
}

export const AppContextProvider = ({ children }: Props) => {
  const [savedDrinks, setSavedDrinks] = useState<SavedCocktailI[]>([]);

  useEffect(() => {
    setSavedDrinks(getItems());
  }, []);

  const saveItem = (item: SaveCocktailI) => {
    const newItems = [
      ...savedDrinks,
      { ...item, createdAt: new Date().toISOString() },
    ];
    setSavedDrinks(newItems);
  };

  const removeItem = (id: string) => {
    const newItems = savedDrinks.filter((item) => item.id !== id);
    setSavedDrinks(newItems);
  };

  const isLiked = (id: string) => {
    return savedDrinks.findIndex((item) => item.id === id) !== -1;
  };

  useEffect(() => {
    saveItems(savedDrinks);
  }, [savedDrinks]);

  return (
    <AppContext.Provider
      value={{
        savedDrinks,
        saveItem,
        removeItem,
        isLiked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
