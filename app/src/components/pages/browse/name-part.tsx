import Btn from "@/components/common/btn";
import SearchInput from "@/components/common/search-input";
import { searchTypeValues, useSearchContext } from "@/contexts/search.context";
import { useEffect, useState } from "react";

export default function NamePart() {
  const { searchType, searchByName } = useSearchContext();
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchByName(value);
  };

  useEffect(() => {
    if (searchType !== searchTypeValues.name) {
      setValue("");
    }
  }, [searchType]);

  return (
    <form
      className="w-full flex items-center gap-3"
      name="search-by-name"
      onSubmit={handleSubmit}
    >
      <SearchInput
        value={value}
        onChange={handleChange}
        placeholder="Cocktail name"
        className="w-full"
      />
      <Btn type="submit" className="w-fit h-full">
        Search
      </Btn>
    </form>
  );
}
