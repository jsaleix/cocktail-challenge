"use client";

import Divider from "@/components/common/divider";
import SearchForm from "./search-form";
import RecipeItem from "@/components/recipe";
import { useSearchContext } from "@/contexts/search.context";
import Loader from "@/components/common/loader";

interface Props {}

export default function BrowsePage({}: Props) {
  const { drinks, loading } = useSearchContext();

  return (
    <div className="flex flex-col gap-5 p-5 h-full w-full lg:w-2/3 bg-gradient-to-r from-light-blue to-slightly-darker-blue shadow-2xl rounded-md">
      <SearchForm />
      <Divider />
      <div className="flex flex-col h-96 items-center">
        {loading && <Loader />}
        {!loading && drinks.length === 0 && (
          <p className="italic text-sm text-gray-300">No drink found :/</p>
        )}
        <div
          className="h-full w-full overflow-scroll hideScrollBar"
          style={{ height: "100%" }}
        >
          {!loading &&
            drinks.length > 0 &&
            drinks.map((d) => <RecipeItem cocktail={d} key={d.strDrink} />)}
        </div>
      </div>
    </div>
  );
}
