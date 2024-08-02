import SearchInput from "@/components/common/search-input";

export default function NamePart() {
  return (
    <form className="w-full md:w-1/3" name="search-by-name">
      <SearchInput placeholder="Cocktail name" className="w-full" />
    </form>
  );
}
