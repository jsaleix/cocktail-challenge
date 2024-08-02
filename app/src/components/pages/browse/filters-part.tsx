import Select from "@/components/common/select";
import { useSearchContext } from "@/contexts/search.context";

interface Props {}

export default function FiltersPart({}: Props) {
  const { categories, glassTypes } = useSearchContext();

  return (
    <form
      className="w-full md:w-2/3 flex items-center gap-3 flex-wrap md:flex-nowrap"
      name="search-by-filters"
    >
      <Select
        className="w-full"
        name="alcoholic"
        value={"placeholder"}
        onChange={() => null}
      >
        <option value="placeholder" disabled hidden>
          Drink type
        </option>{" "}
        <option value="1">Alcoholic</option>
        <option value="2">Non Alcoholic</option>
      </Select>
      <Select
        className="w-full"
        name="category"
        value={"placeholder"}
        onChange={() => null}
      >
        <option value="placeholder" disabled hidden>
          Category
        </option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
      <Select
        className="w-full"
        name="glass"
        value={"placeholder"}
        onChange={() => null}
      >
        <option value="placeholder" disabled hidden>
          Glass type
        </option>
        {glassTypes.map((glass) => (
          <option key={glass} value={glass}>
            {glass}
          </option>
        ))}
      </Select>
    </form>
  );
}
