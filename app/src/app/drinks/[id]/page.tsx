import DrinkBasis from "@/components/drink/basis";
import cocktailService from "@/lib/services/cocktail.service";
import { mapRawDrink } from "@/lib/utils/format";
import Link from "next/link";
import { redirect } from "next/navigation";

const fetchDrink = async (id: string) => {
  const res = await cocktailService.findDrinkById(id);
  if (!res) {
    return null;
  }
  return mapRawDrink(res);
};

export default async function DrinkPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const drink = await fetchDrink(id);
  if (!drink) return redirect("/404");

  return (
    <div className="container mx-auto h-full w-full">
      <div className="w-full h-full flex items-center justify-center gap-10 p-5">
        <div className="flex flex-col gap-5 p-5 h-full w-full lg:w-2/3 bg-gradient-to-r from-light-blue to-slightly-darker-blue shadow-2xl rounded-md">
          <Link
            href="/browse"
            className="flex items-center gap-5 hover:opacity-80 duration-500"
          >
            <svg
              width="31"
              height="27"
              viewBox="0 0 31 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.999999 13.5L30 13.5M0.999999 13.5L13.4286 1M0.999999 13.5L13.4286 26"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-light">All drinks</span>
          </Link>
          <DrinkBasis drink={drink} compact={false} />
        </div>
      </div>
    </div>
  );
}
