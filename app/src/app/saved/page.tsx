import SavedPage from "@/components/pages/saved";
import cocktailService from "@/lib/services/cocktail.service";

export default async function Browse() {
  return (
    <div className="container mx-auto h-full w-full">
      <div className="w-full h-full flex items-center justify-center gap-10 p-5">
        <SavedPage />
      </div>
    </div>
  );
}
