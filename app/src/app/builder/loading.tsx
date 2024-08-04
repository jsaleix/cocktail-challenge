import Divider from "@/components/common/divider";
import CircledArrow from "@/components/icons/circled-arrow";
import clsx from "clsx";

export default function Loading() {
  return (
    <div className="container mx-auto h-full w-full">
      <div className={"h-full w-full p-5"}>
        <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10">
          <section className=" h-4/5 w-full lg:w-1/3 rounded rounded-md shadow-2xl bg-gradient-to-r from-light-blue to-slightly-darker-blue ">
            <div className="w-full h-full flex flex-col gap-5 p-5">
              <div className="flex flex-col gap-5" id="search">
                <span
                  className="animate-pulse bg-background h-16 rounded-xl px-5 shadow-md"
                  id="builder-input"
                />
                <span
                  className="animate-pulse bg-background h-7 w-1/3 rounded-md px-5 shadow-md"
                  id="builder-subtext"
                />
              </div>
              <Divider />
              <div id="suggestions" className="flex flex-col gap-5">
                <span
                  className="animate-pulse bg-background h-7 w-1/4 rounded-md px-5 shadow-md"
                  id="input-suggestion-title"
                />
                <div
                  id="ingredients-container"
                  className="flex flex-wrap gap-2"
                >
                  {new Array(20).fill(0).map((_, i) => {
                    const width = Math.random() > 0.5 ? "w-32" : "w-20";
                    const classNames = clsx(
                      "animate-pulse bg-background h-7 rounded-md px-5 shadow-md",
                      width
                    );
                    return <span className={classNames} key={i} />;
                  })}
                </div>
              </div>
            </div>
          </section>
          <div className="h-full flex flex-col items-center justify-center rotate-90 lg:rotate-0 ">
            <CircledArrow />
          </div>
          <section className="min-h-4/5 w-full lg:w-1/3 rounded rounded-md shadow-2xl bg-gradient-to-r from-light-blue to-slightly-darker-blue ">
            <div className="w-full h-full flex flex-col gap-5 p-5">
              <span
                className="animate-pulse bg-background h-7 w-1/3 rounded-md px-5 shadow-md"
                id="output-title"
              />
              <div className="flex flex-col gap-2">
                <span
                  className="animate-pulse bg-background h-5 w-1/3 rounded-md px-5 shadow-md"
                  id="output-subtext"
                />
                <span
                  className="animate-pulse bg-background h-5 w-3/5 rounded-md px-5 shadow-md"
                  id="output-subtext-2"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
