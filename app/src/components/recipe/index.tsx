import { CocktailInListI } from "@/lib/types/cocktail";
import SavedIcon from "../icons/saved-icon";
import SaveIcon from "../icons/save-icon";
import { useAppContext } from "../../contexts/app.context";

interface Props {
  cocktail: CocktailInListI;
}

export default function RecipeItem({ cocktail }: Props) {
  const { isLiked, saveItem } = useAppContext();
  const liked = isLiked(cocktail.idDrink);

  return (
    <button
      onClick={() =>
        saveItem({ id: cocktail.idDrink, name: cocktail.strDrink })
      }
      className="flex w-full items-center bg-black bg-opacity-80 hover:bg-opacity-100 px-5 py-5 cursor-pointer group"
    >
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
        {liked && <SavedIcon />}
        {!liked && <SaveIcon />}
      </div>
    </button>
  );
}
