import { useBuilderContext } from "@/components/context/builder.context";

interface Props {}

export default function builderOutput({}: Props) {
  const { recipes } = useBuilderContext();
  
  return (
    <div className="min-h-4/5 w-full md:w-1/3 bg-light-blue rounded rounded-md shadow-2xl">
      <div className="w-full h-full flex flex-col gap-5 p-5">
        <h2 className="text-xl font-semibold">
          Recipes ({recipes.length.toString()})
        </h2>
        <div className="" id="recipes-container"></div>
      </div>
    </div>
  );
}
