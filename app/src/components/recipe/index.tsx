import { CocktailInListI } from "@/lib/types/cocktail";
import SavedIcon from "../icons/saved-icon";
import SaveIcon from "../icons/save-icon";

interface Props {
  cocktail: CocktailInListI;
}

export default function RecipeItem({ cocktail }: Props) {
  return (
    <article className="flex items-center bg-black bg-opacity-80 hover:bg-opacity-100 px-5 py-5 cursor-pointer group">
      <div className="flex flex-row gap-3">
        <div className="w-10 h-10 group-hover:opacity-80">
          <img
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <h2 className="text-white font-light">{cocktail.strDrink}</h2>
      </div>
      <div className="ml-auto group-hover:opacity-80">
        {/* <SavedIcon /> */}
        <SaveIcon />
      </div>
    </article>
  );
}
