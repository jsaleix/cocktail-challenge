import SavedPage from "@/components/pages/saved";
import cocktailService from "@/lib/services/cocktail.service";

const fetchData = async () => {
  const data = await cocktailService.searchCocktail("");
  if (data) return data.drinks;
  return [];
};

export default async function Browse() {
  const data = await fetchData();

  return (
    <div className="container mx-auto h-full w-full">
      <div className="w-full h-full flex items-center justify-center gap-10 p-5">
        <SavedPage data={data} />
      </div>
    </div>
  );
}
