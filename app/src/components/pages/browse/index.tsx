import Divider from "@/components/common/divider";
import SearchForm from "./search-form";

interface Props {}

export default function BrowsePage({}: Props) {
  return (
    <div className="flex flex-col gap-5 p-5 min-h-48 w-2/3 bg-gradient-to-r from-light-blue to-slightly-darker-blue shadow-2xl rounded-md">
      <SearchForm />
      <Divider />
    </div>
  );
}
