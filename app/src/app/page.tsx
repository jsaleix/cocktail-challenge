export default function Home() {
  return (
    <div className="container mx-auto h-full w-full">
      <div className={"h-full w-full p-5"}>
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="min-h-48 w-full md:w-1/3 bg-white rounded rounded-md"></div>
          <p>{"->"}</p>
          <div className="min-h-48 w-full md:w-1/3 bg-gray-500 rounded rounded-md"></div>
        </div>
      </div>
    </div>
  );
}
