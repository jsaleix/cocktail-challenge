import CircledArrow from "@/components/icons/circled-arrow";
import BuilderInput from "@/components/pages/builder/builder-input";
import BuilderOutput from "@/components/pages/builder/builder-output";

export default async function Builder() {
  return (
    <div className="container mx-auto h-full w-full">
      <div className={"h-full w-full p-5"}>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
          <BuilderInput />
          <CircledArrow />
          <BuilderOutput recipes={[]} />
        </div>
      </div>
    </div>
  );
}
