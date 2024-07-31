import { BuilderProvider } from "@/components/context/builder.context";
import BuilderPage from "@/components/pages/builder";

export default function Builder() {
  return (
    <div className="container mx-auto h-full w-full">
      <div className={"h-full w-full p-5"}>
        <BuilderProvider>
          <BuilderPage />
        </BuilderProvider>
      </div>
    </div>
  );
}
