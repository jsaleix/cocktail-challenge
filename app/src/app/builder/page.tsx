import { BuilderProvider } from "@/components/context/builder.context";
import BuilderPage from "@/components/pages/builder";
import cocktailService from "@/lib/services/cocktail.service";

const fetchSuggestions = async () => {
  const res = await cocktailService.listIngredients();
  if (!res) return [] as string[];
  return res.drinks.slice(0, 20).map((d) => d.strIngredient1);
};

export default async function Builder() {
  const suggestions = await fetchSuggestions();

  return (
    <div className="container mx-auto h-full w-full">
      <div className={"h-full w-full p-5"}>
        <BuilderProvider>
          <BuilderPage suggestions={suggestions} />
        </BuilderProvider>
      </div>
    </div>
  );
}
