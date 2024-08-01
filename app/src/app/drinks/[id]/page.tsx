export default function DrinkPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto h-full w-full">
      <div className="w-full h-full flex items-center justify-center gap-10 p-5">
        {id}
      </div>
    </div>
  );
}
