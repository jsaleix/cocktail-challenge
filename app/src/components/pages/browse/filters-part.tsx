import Btn from "@/components/common/btn";
import Select from "@/components/common/select";
import { FiltersI, useSearchContext } from "@/contexts/search.context";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface Props {}

const DEFAULT_VALUE = "placeholder";
const DEFAULT_FILTERS = {
  alcoholic: DEFAULT_VALUE,
  category: DEFAULT_VALUE,
  glass: DEFAULT_VALUE,
};

export default function FiltersPart({}: Props) {
  const { searchType, categories, glassTypes, searchByFilters } =
    useSearchContext();
  const { register, handleSubmit, watch, resetField } = useForm({
    defaultValues: DEFAULT_FILTERS,
  });

  /*
    < -- RESET LOGIC
    Bcz the api doesn't support multiple filters at the same time
    we need to reset the other filters when one is selected
    otherwise it would looks confusing to the user
    since only the first filter will be applied
  */

  const watchAll = watch();
  const hasChanged =
    JSON.stringify(DEFAULT_FILTERS) !== JSON.stringify(watchAll);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    resetField("alcoholic");
    resetField("category");
    resetField("glass");
  };

  useEffect(() => {
    const sub = watch((value, { name, type }) => {
      if (type === "change") {
        if (value[name!] !== DEFAULT_VALUE) {
          const otherFields = Object.keys(value).filter((key) => key !== name);
          otherFields.forEach((field) => resetField(field as any));
        }
      }
    });

    return () => sub.unsubscribe();
  }, [watchAll]);

  /*
  --> END OF RESET LOGIC
  */

  // Reset filters when the search type changes
  useEffect(() => {
    if (searchType !== "filters") {
      resetField("alcoholic");
      resetField("category");
      resetField("glass");
    }
  }, [searchType]);

  const onSubmit = (data: Required<FiltersI>) => {
    const removedEmpty = Object.entries(data).reduce((acc, [key, value]) => {
      if (value !== DEFAULT_VALUE) {
        acc[key] = value;
      }
      return acc;
    }, {} as Record<string, string>) as FiltersI;
    searchByFilters(removedEmpty);
  };

  return (
    <form
      className="w-full flex items-center gap-3"
      name="search-by-filters"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Select
        register={register("alcoholic")}
        className="w-full"
        name="alcoholic"
      >
        <option value={DEFAULT_VALUE} disabled hidden>
          Drink type
        </option>{" "}
        <option value="Alcoholic">Alcoholic</option>
        <option value="Non Alcoholic">Non Alcoholic</option>
      </Select>
      <Select
        register={register("category")}
        className="w-full"
        name="category"
      >
        <option value={DEFAULT_VALUE} disabled hidden>
          Category
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <Select register={register("glass")} className="w-full" name="glass">
        <option value={DEFAULT_VALUE} disabled hidden>
          Glass type
        </option>
        {glassTypes.map((glass) => (
          <option key={glass} value={glass}>
            {glass}
          </option>
        ))}
      </Select>
      <Btn
        onClick={handleReset}
        disabled={!hasChanged}
        className="w-full h-full"
      >
        Reset
      </Btn>
      <Btn type="submit" className="w-full h-full">
        Apply
      </Btn>
    </form>
  );
}
