import BrowsePage from "@/components/pages/browse";
import { SearchContextProvider } from "@/contexts/search.context";
import cocktailService from "@/lib/services/cocktail.service";

const fetchInitialData = async () => {
  const data = await cocktailService.searchDrinkByName("");
  if (data) return data.drinks;
  return [];
};

export default async function Saved() {
  const initialList = await fetchInitialData() || [];
  const categories = await cocktailService.listCategories();
  const glassTypes = await cocktailService.listGlassTypes();

  return (
    <div className="container mx-auto h-full w-full">
      <div className="w-full h-full flex items-center justify-center gap-10 p-5">
        <SearchContextProvider
          categories={categories}
          glassTypes={glassTypes}
          data={initialList}
        >
          <BrowsePage />
        </SearchContextProvider>
      </div>
    </div>
  );
}
