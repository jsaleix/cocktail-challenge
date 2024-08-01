import { CocktailInListI } from "@/lib/types/cocktail";
import SavedIcon from "../icons/saved-icon";
import SaveIcon from "../icons/save-icon";
import { useAppContext } from "../../contexts/app.context";
import clsx from "clsx";

interface Props {
  cocktail: CocktailInListI;
  bottomLine?: boolean;
}

export default function RecipeItem({ cocktail, bottomLine = true }: Props) {
  const { isLiked, saveItem, removeItem } = useAppContext();
  const liked = isLiked(cocktail.idDrink);

  const toggleSave = () => {
    if (liked) {
      removeItem(cocktail.idDrink);
    } else {
      saveItem({
        idDrink: cocktail.idDrink,
        strDrink: cocktail.strDrink,
        strDrinkThumb: cocktail.strDrinkThumb,
      });
    }
  };

  return (
    <article
      className={clsx(
        "flex w-full items-center bg-black bg-opacity-80 hover:bg-opacity-100 px-5 py-5 cursor-pointer group",
        bottomLine && "border-b border-gray-800"
      )}
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
        {liked && <SavedIcon onClick={toggleSave} />}
        {!liked && <SaveIcon onClick={toggleSave} />}
      </div>
    </article>
  );
}
