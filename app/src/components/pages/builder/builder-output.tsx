import { useBuilderContext } from "@/components/context/builder.context";

interface Props {}

export default function builderOutput({}: Props) {
  const { recipes } = useBuilderContext();

  return (
    <section className="min-h-4/5 h-full w-full md:w-1/3 bg-light-blue rounded rounded-md shadow-2xl">
      <div className="w-full h-full flex flex-col gap-5 p-5">
        <h2 className="text-xl font-semibold">
          Recipes ({recipes.length.toString()})
        </h2>
        <div className="flex flex-col" id="recipes-container">
          {recipes.length == 0 && (
            <div className="italic text-sm text-gray-300">
              <p>No recipes found.</p>
              <p>Try adding or removing ingredients.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
